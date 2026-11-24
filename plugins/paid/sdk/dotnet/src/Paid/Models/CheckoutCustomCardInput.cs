using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Core.Validation;
using Paid.Core.Validation.Attributes;

namespace Paid.Models;

public record CheckoutCustomCardInput
{
    /// <summary>
    /// Card title.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// Headline price text, e.g. "$99/mo".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priceText")]
    public string? PriceText { get; init; }

    /// <summary>
    /// Call-to-action button label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buttonText")]
    public string? ButtonText { get; init; }

    /// <summary>
    /// Call-to-action button URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buttonUrl")]
    [Format(FormatKind.Uri)]
    public string? ButtonUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
