using System.Text.Json.Serialization;
using StayingApi.Core.Models;

namespace StayingApi.Models;

/// <summary>
/// failed — HTTP 200 with the failure nested at data.error (a PlatformFailureError, incl. <c>retryable</c>). creditsCharged is 0 (failed work is free). Detect via data.status === "failed", NOT via a top-level <c>error</c>.
/// </summary>
public record JobFailed
{
    [JsonPropertyName("data")]
    public required Data2 Data { get; init; }

    [JsonPropertyName("meta")]
    public required Meta2 Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
