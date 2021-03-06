export default function initGetDistancesBlock(){
  var getDistancesBlock = {
    "type": "get_distances",
    "message0": "Get distances for %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "ROBOTVAR",
        "variable": "myRobot"
      }
    ],
    "output": null,
    "colour": "%{BKY_VARIABLES_DYNAMIC_HUE}",
    "tooltip": "Returns an array of distances for raycasters",
    "helpUrl": ""
  };

  Blockly.Blocks['get_distances'] = {
    init: function() {
      this.jsonInit(getDistancesBlock);

    }
  };

  Blockly.JavaScript['get_distances'] = function(block) {
    var variable_robotvar = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ROBOTVAR'), Blockly.Variables.NAME_TYPE);

    var code = variable_robotvar + '.getDistances()';

    return [code, Blockly.JavaScript.ORDER_NONE];
  };
}
