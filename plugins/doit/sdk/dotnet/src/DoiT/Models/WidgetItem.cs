using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Catalogue entry for one widget, without its computed result.
/// </summary>
public record WidgetItem
{
    /// <summary>
    /// Customer- and tier-specific widget id. This value is accepted by getWidget and can vary between customers.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Stable customer-facing widget identifier. This value is also accepted by getWidget.
    /// </summary>
    [JsonPropertyName("alias")]
    public required string Alias { get; init; }

    /// <summary>
    /// Human-readable widget name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// What the widget value represents.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Whether the widget is supplied by DoiT or defined by a customer.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeDoiTWidgetsBetaApi Type { get; init; }

    /// <summary>
    /// Determines which property is populated in the widget's <c>result</c>.
    /// </summary>
    [JsonPropertyName("kind")]
    public string Kind { get; } = "monetary_metric";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
