using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record TestStateInput
{
    /// <summary>
    /// The Amazon States Language (ASL) definition of the state or state machine.
    /// </summary>
    [JsonPropertyName("definition")]
    public required string Definition { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the execution role with the required IAM permissions for the state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleArn")]
    public string? RoleArn { get; init; }

    /// <summary>
    /// A string that contains the JSON input data for the state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// Determines the values to return when a state is tested. You can specify one of the following types: INFO: Shows the final state output. By default, Step Functions sets inspectionLevel to INFO if you don't specify a level. DEBUG: Shows the final state output along with the input and output data processing result. TRACE: Shows the HTTP request and response for an HTTP Task. This level also shows the final state output along with the input and output data processing result. Each of these levels also provide information about the status of the state execution and the next state to transition to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inspectionLevel")]
    public InspectionLevel? InspectionLevel { get; init; }

    /// <summary>
    /// Specifies whether or not to include secret information in the test result. For HTTP Tasks, a secret includes the data that an EventBridge connection adds to modify the HTTP request headers, query parameters, and body. Step Functions doesn't omit any information included in the state definition or the HTTP response. If you set revealSecrets to true, you must make sure that the IAM user that calls the TestState API has permission for the states:RevealSecrets action. For an example of IAM policy that sets the states:RevealSecrets permission, see IAM permissions to test a state. Without this permi
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revealSecrets")]
    public bool? RevealSecrets { get; init; }

    /// <summary>
    /// JSON object literal that sets variables used in the state under test. Object keys are the variable names and values are the variable values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public string? Variables { get; init; }

    /// <summary>
    /// Denotes the particular state within a state machine definition to be tested. If this field is specified, the definition must contain a fully-formed state machine definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateName")]
    public string? StateName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mock")]
    public MockInput? Mock { get; init; }

    /// <summary>
    /// A JSON string representing a valid Context object for the state under test. This field may only be specified if a mock is specified in the same request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context")]
    public string? Context { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateConfiguration")]
    public TestStateConfiguration? StateConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
