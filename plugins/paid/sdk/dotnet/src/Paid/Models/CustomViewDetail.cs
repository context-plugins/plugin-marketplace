using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CustomViewDetail
{
    [JsonPropertyName("displayId")]
    public required string DisplayId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("status")]
    public required CustomViewDetailStatus Status { get; init; }

    /// <summary>
    /// Ids of the result sets the render bundle will receive.
    /// </summary>
    [JsonPropertyName("queryIds")]
    public required IReadOnlyList<string> QueryIds { get; init; }

    /// <summary>
    /// Self-contained HTML document rendered inside the isolated sandbox iframe.
    /// </summary>
    [JsonPropertyName("renderBundle")]
    public required string RenderBundle { get; init; }

    /// <summary>
    /// The view's current default date range, or null if it uses no adjustable period.
    /// </summary>
    [JsonPropertyName("period")]
    public required CustomViewDetailPeriod? Period { get; init; }

    /// <summary>
    /// 'customer': data is scoped to one viewing customer and the view is embeddable per-customer. 'organization': data is org-wide and the view is internal-only.
    /// </summary>
    [JsonPropertyName("scope")]
    public required CustomViewDetailScope Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
