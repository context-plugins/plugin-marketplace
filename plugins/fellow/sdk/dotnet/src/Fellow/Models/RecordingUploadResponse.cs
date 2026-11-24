using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response containing a single API-uploaded recording with its import status.
/// </summary>
public record RecordingUploadResponse
{
    /// <summary>
    /// The upload_api response: a recording's API-import identity and status, nothing else.
    /// <para>
    /// Deliberately omits the full Recording payload (transcript, recaps, media URL, calendar
    /// metadata) — this surface only reports what an API-upload client needs to poll an import
    /// to completion. The recording's id is exposed as <c>recording_id</c> to match the submit
    /// endpoint (POST /recordings/upload), which returns the same key.
    /// </para>
    /// </summary>
    [JsonPropertyName("upload")]
    public required RecordingUpload Upload { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
