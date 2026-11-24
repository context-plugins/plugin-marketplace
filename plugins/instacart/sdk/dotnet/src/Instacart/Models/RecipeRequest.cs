using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Core.Validation;
using Instacart.Core.Validation.Attributes;

namespace Instacart.Models;

public record RecipeRequest
{
    /// <summary>
    /// The title of the recipe displayed on the recipe page.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// URL of an image to display for the recipe.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image_url")]
    [Format(FormatKind.Uri)]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// The name of the recipe author.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author")]
    public string? Author { get; init; }

    /// <summary>
    /// The number of servings the recipe makes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("servings")]
    [Minimum(1)]
    public int? Servings { get; init; }

    /// <summary>
    /// The estimated cooking time for the recipe.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cooking_time")]
    public string? CookingTime { get; init; }

    /// <summary>
    /// An external identifier for the recipe from the partner system.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_reference_id")]
    public string? ExternalReferenceId { get; init; }

    /// <summary>
    /// Information for crediting the content creator on the recipe page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_creator_credit_info")]
    public ContentCreatorCreditInfo? ContentCreatorCreditInfo { get; init; }

    /// <summary>
    /// The number of seconds until the generated recipe link expires.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_in")]
    [Minimum(1)]
    public int? ExpiresIn { get; init; }

    /// <summary>
    /// Step-by-step cooking instructions for the recipe.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instructions")]
    public IReadOnlyList<string>? Instructions { get; init; }

    /// <summary>
    /// The list of ingredients required for the recipe.
    /// </summary>
    [JsonPropertyName("ingredients")]
    public required IReadOnlyList<Ingredient> Ingredients { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
