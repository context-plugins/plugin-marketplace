using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record HistoryEventExecutionDataDetails
{
    /// <summary>
    /// Indicates whether input or output was truncated in the response. Always false for API calls. In CloudWatch logs, the value will be true if the data is truncated due to size limits.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("truncated")]
    public bool? Truncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
