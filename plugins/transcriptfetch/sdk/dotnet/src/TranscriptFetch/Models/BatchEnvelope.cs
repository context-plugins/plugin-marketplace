using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models;

public record BatchEnvelope
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "True";

    [JsonPropertyName("request_id")]
    public required string RequestId { get; init; }

    [JsonPropertyName("data")]
    public required Data Data { get; init; }

    [JsonPropertyName("usage")]
    public required Usage Usage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
