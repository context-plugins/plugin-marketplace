using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Core.Validation;
using Instacart.Core.Validation.Attributes;

namespace Instacart.Models;

public record ProductsLinkResponse
{
    /// <summary>
    /// The unique URL to the generated shopping list or recipe page on Instacart Marketplace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("products_link_url")]
    [Format(FormatKind.Uri)]
    public string? ProductsLinkUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
