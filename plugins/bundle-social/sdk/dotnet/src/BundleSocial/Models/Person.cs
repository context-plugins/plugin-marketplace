using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record Person
{
    [JsonPropertyName("kind")]
    public string Kind { get; } = "person";

    [JsonPropertyName("urn")]
    public required string Urn { get; init; }

    /// <summary>
    /// Text to render the mention with. Empty when LinkedIn did not give us the member's name — see needsDisplayName.
    /// </summary>
    [JsonPropertyName("display")]
    public required string Display { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headline")]
    public string? Headline { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("photoUrl")]
    [Format(FormatKind.Uri)]
    public string? PhotoUrl { get; init; }

    /// <summary>
    /// True when the member was resolved but their name was not. Supply the name yourself: LinkedIn only renders a mention when the text matches the member's name exactly (case sensitive), so a vanity slug never works.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("needsDisplayName")]
    public bool? NeedsDisplayName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
