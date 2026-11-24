using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

/// <summary>
/// General Leadspace JSON error envelope
/// </summary>
public record ErrorErrorLeadspaceApiV4EnrichmentApi
{
    /// <summary>
    /// Error description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// Leadspace tracking identifier for further inspection
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tracking_id")]
    public string? TrackingId { get; init; }

    /// <summary>
    /// Timestamp assigned when the request reached Leadspace servers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("request_timestamp")]
    public string? RequestTimestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
