using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response containing a single recording.
/// </summary>
public record RecordingResponse
{
    [JsonPropertyName("recording")]
    public required Recording Recording { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
