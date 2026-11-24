using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record CreateRequest
{
    /// <summary>
    /// Recipe title (e.g. "Vanilla Yogurt Parfait")
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// List of strings where each element is a recipe ingredient (e.g. ["2 cups of greek yogurt", "2 tablespoons of honey", "1 teaspoon of vanilla extract"]). Don't include items in the list that the user already mentioned they have.
    /// </summary>
    [JsonPropertyName("ingredients")]
    public required IReadOnlyList<string> Ingredients { get; init; }

    /// <summary>
    /// List of strings where each element is a recipe instruction
    /// </summary>
    [JsonPropertyName("instructions")]
    public required IReadOnlyList<string> Instructions { get; init; }

    /// <summary>
    /// This field stores the question asked by the user about recipe or mealplan in the current chat session. For instance, a user can ask "recipe for chocolate cookies" and the assistant responds by listing the ingredients needed to make chocolate cookies. In this chat interaction, we need to return "recipe for chocolate cookies" as the value in this field
    /// </summary>
    [JsonPropertyName("question")]
    public required string Question { get; init; }

    /// <summary>
    /// The value used to populate this field should always be "OpenAI"
    /// </summary>
    [JsonPropertyName("partner_name")]
    public required string PartnerName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
