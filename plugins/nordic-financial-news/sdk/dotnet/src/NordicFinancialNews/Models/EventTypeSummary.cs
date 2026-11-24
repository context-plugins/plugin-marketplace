using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Models;

public record EventTypeSummary
{
    /// <summary>
    /// Unique event type identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Event type slug: the value for the <c>event_type</c> filter on <c>GET /api/v1/events</c> only. <c>GET /api/v1/calendar_events</c> takes a different, underscored vocabulary enumerated on that endpoint; these slugs are not accepted there, and a few spellings overlap while denoting different things.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// Event type display label
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// The broader category this type belongs to
    /// </summary>
    [JsonPropertyName("category")]
    public required CategoryNordicFinancialNewsEventTypesApi Category { get; init; }

    /// <summary>
    /// One-line description of what this type covers
    /// </summary>
    [JsonPropertyName("summary")]
    public required string? Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
