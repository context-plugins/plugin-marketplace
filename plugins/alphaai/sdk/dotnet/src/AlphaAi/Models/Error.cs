using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record Error
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? ErrorValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    /// <summary>
    /// Machine-readable context on capped responses: the 429 carries <c>tier</c>, <c>limit_per_minute</c>, <c>limit_per_day</c>, <c>retry_after_seconds</c>; the archive 403 carries <c>reason: archive_horizon</c>, <c>tier</c>, <c>archive_days</c>. Both include an <c>upgrade</c> object (higher tiers' caps + <c>pricing_url</c>) for callers below Pro. A 400 caused by an unknown query parameter additionally carries <c>allowed_params</c> — the complete list this endpoint accepts, read straight off the endpoint's own schema — plus <c>docs</c>, a link to the developer reference. Individual entries in <c>extra.fields</c> may carry a did-you-mean hint in their <c>msg</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra")]
    public object? Extra { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
