using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Models.OneOf;

namespace TranscriptFetch.Models;

public record SuccessEnvelope
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "True";

    [JsonPropertyName("request_id")]
    public required string RequestId { get; init; }

    [JsonPropertyName("data")]
    public required DataTranscriptfetchSystemApi Data { get; init; }

    [JsonPropertyName("usage")]
    public required Usage Usage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
