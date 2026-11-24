using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record StartSyncExecutionInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine to execute.
    /// </summary>
    [JsonPropertyName("stateMachineArn")]
    public required string StateMachineArn { get; init; }

    /// <summary>
    /// The name of the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The string that contains the JSON input data for the execution, for example: "{\"first_name\" : \"Alejandro\"}" If you don't include any JSON input data, you still must include the two braces, for example: "{}" Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// Passes the X-Ray trace header. The trace header can also be passed in the request payload. For X-Ray traces, all Amazon Web Services services use the X-Amzn-Trace-Id header from the HTTP request. Using the header is the preferred mechanism to identify a trace. StartExecution and StartSyncExecution API operations can also use traceHeader from the body of the request payload. If both sources are provided, Step Functions will use the header value (preferred) over the value in the request body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traceHeader")]
    public string? TraceHeader { get; init; }

    /// <summary>
    /// If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt the definition. Alternatively, you can call the API with includedData = METADATA_ONLY to get a successful response without the encrypted definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedData")]
    public IncludedData1? IncludedData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
