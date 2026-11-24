using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record LambdaConflictHandlerConfig
{
    /// <summary>
    /// The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaConflictHandlerArn")]
    public string? LambdaConflictHandlerArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
