using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response for POST /recordings/upload — the 201 confirming a recording was queued for import.
/// </summary>
public record RecordingUploadSubmitResponse
{
    [JsonPropertyName("recording_id")]
    public required string RecordingId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
