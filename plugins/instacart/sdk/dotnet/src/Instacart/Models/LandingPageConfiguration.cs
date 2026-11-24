using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Core.Validation;
using Instacart.Core.Validation.Attributes;

namespace Instacart.Models;

/// <summary>
/// Configuration options for the landing page appearance and behavior.
/// </summary>
public record LandingPageConfiguration
{
    /// <summary>
    /// URL to link back to the partner site from the landing page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partner_linkback_url")]
    [Format(FormatKind.Uri)]
    public string? PartnerLinkbackUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
