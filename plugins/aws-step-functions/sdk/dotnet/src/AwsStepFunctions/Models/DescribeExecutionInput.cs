using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record DescribeExecutionInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the execution to describe.
    /// </summary>
    [JsonPropertyName("executionArn")]
    public required string ExecutionArn { get; init; }

    /// <summary>
    /// If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt the definition. Alternatively, you can call DescribeStateMachine API with includedData = METADATA_ONLY to get a successful response without the encrypted definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedData")]
    public IncludedData? IncludedData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
