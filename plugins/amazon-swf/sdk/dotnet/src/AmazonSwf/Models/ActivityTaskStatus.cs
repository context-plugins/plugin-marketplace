using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ActivityTaskStatus
{
    /// <summary>
    /// Set to true if cancellation of the task is requested.
    /// </summary>
    [JsonPropertyName("cancelRequested")]
    public required bool CancelRequested { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
