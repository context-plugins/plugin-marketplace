using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Core.Validation;
using Paid.Core.Validation.Attributes;
using Paid.Models.Enums;

namespace Paid.Models;

public record CustomView
{
    /// <summary>
    /// Stable public identifier used in preview/embed URLs.
    /// </summary>
    [JsonPropertyName("displayId")]
    public required string DisplayId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// A view is DRAFT until explicitly published. For customer-scoped views, only PUBLISHED views are embeddable and served to end-customers; a DRAFT is not. For organization-scoped views, publishing is only a 'ready to use' marker — both DRAFT and PUBLISHED are visible to your organization's members in Paid (publishing does not change who in the org can see it), and neither is ever embeddable to an end-customer.
    /// </summary>
    [JsonPropertyName("status")]
    public required CustomViewStatus Status { get; init; }

    /// <summary>
    /// Absolute URL to open this view in the Paid app for preview. Surface it to the user after creating or publishing a view. Null when the app URL is not configured.
    /// </summary>
    [JsonPropertyName("previewUrl")]
    [Format(FormatKind.Uri)]
    public required string? PreviewUrl { get; init; }

    /// <summary>
    /// 'customer': data is scoped to one viewing customer and the view is embeddable per-customer. 'organization': data is org-wide and the view is internal-only.
    /// </summary>
    [JsonPropertyName("scope")]
    public required CustomViewDetailScope Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
