using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models;

public record ErrorEnvelope2
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "False";

    [JsonPropertyName("request_id")]
    public required string RequestId { get; init; }

    /// <summary>
    /// Every failure carries this block. Branch on code (a stable string) or number (a stable integer whose thousands digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9 ours; 5xxx means retry with backoff). At most one of retry_with, details, issues is present. Failures are never charged.
    /// </summary>
    [JsonPropertyName("error")]
    public required ErrorBlock Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
