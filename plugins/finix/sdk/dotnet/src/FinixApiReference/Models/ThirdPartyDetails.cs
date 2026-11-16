using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Details about the third-party processor associated with the <c>Transfer</c>.
/// </summary>
public record ThirdPartyDetails
{
    /// <summary>
    /// The trace ID returned by the third-party processor used to identify the <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_trace_id")]
    public string? ExternalTraceId { get; init; }

    /// <summary>
    /// The name of the third-party processor associated with the <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type32? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
