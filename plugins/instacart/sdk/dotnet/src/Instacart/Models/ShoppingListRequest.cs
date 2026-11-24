using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Core.Validation;
using Instacart.Core.Validation.Attributes;

namespace Instacart.Models;

public record ShoppingListRequest
{
    /// <summary>
    /// The title displayed at the top of the shopping list page.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// URL of an image to display on the shopping list page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image_url")]
    [Format(FormatKind.Uri)]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// The type of product link to create.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link_type")]
    public string? LinkType { get; init; }

    /// <summary>
    /// The number of seconds until the generated link expires.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_in")]
    [Minimum(1)]
    public int? ExpiresIn { get; init; }

    /// <summary>
    /// Additional instructions or notes to display on the page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instructions")]
    public string? Instructions { get; init; }

    /// <summary>
    /// The list of products to include on the shopping list page.
    /// </summary>
    [JsonPropertyName("line_items")]
    public required IReadOnlyList<LineItem> LineItems { get; init; }

    /// <summary>
    /// Configuration options for the landing page appearance and behavior.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("landing_page_configuration")]
    public LandingPageConfiguration? LandingPageConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
