using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

/// <summary>
/// Present (with HTTP 206) when the recording is still being
/// transcribed in parts and <c>segments</c> covers only the finished ones.
/// Speaker labels are provisional until the response is a plain 200.
/// </summary>
public record TranscriptPartial2
{
    [JsonPropertyName("pieces_done")]
    public required int PiecesDone { get; init; }

    [JsonPropertyName("pieces_total")]
    public required int PiecesTotal { get; init; }

    [JsonPropertyName("seconds_total")]
    public required long SecondsTotal { get; init; }

    [JsonPropertyName("seconds_transcribed")]
    public required long SecondsTranscribed { get; init; }

    [JsonPropertyName("speakers_final")]
    public required bool SpeakersFinal { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
