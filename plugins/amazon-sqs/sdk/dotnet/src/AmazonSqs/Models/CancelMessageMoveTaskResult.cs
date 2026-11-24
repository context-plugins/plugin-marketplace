using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record CancelMessageMoveTaskResult
{
    /// <summary>
    /// The approximate number of messages already moved to the destination queue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ApproximateNumberOfMessagesMoved")]
    public int? ApproximateNumberOfMessagesMoved { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
