using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CreateCustomViewRequest
{
    /// <summary>
    /// Human-readable view name (shown in preview + audit log).
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Optional longer description of what the view shows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// One or more named queries. Each becomes a separately-keyed result set in the embed.
    /// </summary>
    [JsonPropertyName("queries")]
    public required IReadOnlyList<CustomViewQuery> Queries { get; init; }

    /// <summary>
    /// Self-contained HTML document that renders the result sets. Inline ALL CSS/JS/charting libraries — the render sandbox has no network access. It receives the keyed result sets via a <c>message</c> event (<c>data[&lt;queryId&gt;]</c>) and must not fetch anything itself.
    /// </summary>
    [JsonPropertyName("renderBundle")]
    public required string RenderBundle { get; init; }

    /// <summary>
    /// Optional default date range. Required if any query uses the <c>{period_start:DateTime}</c> / <c>{period_end:DateTime}</c> placeholders. Can be changed later in Paid without re-authoring.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period")]
    public CreateCustomViewRequestPeriod? Period { get; init; }

    /// <summary>
    /// 'customer' (default): data is scoped to one viewing customer and the view is embeddable per-customer. 'organization': data is org-wide; the view is internal-only (visible to org members in Paid, never embeddable).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public CreateCustomViewRequestScope? Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
