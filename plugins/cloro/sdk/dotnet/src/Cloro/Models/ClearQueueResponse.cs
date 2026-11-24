using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record ClearQueueResponse
{
    /// <summary>
    /// Indicates the queue was cleared successfully.
    /// </summary>
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Number of queued tasks that were removed.
    /// </summary>
    [JsonPropertyName("cleared")]
    public required int Cleared { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
