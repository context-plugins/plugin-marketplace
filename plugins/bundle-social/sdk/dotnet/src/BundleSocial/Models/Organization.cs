using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record Organization
{
    [JsonPropertyName("kind")]
    public string Kind { get; } = "organization";

    [JsonPropertyName("urn")]
    public required string Urn { get; init; }

    [JsonPropertyName("display")]
    public required string Display { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vanityName")]
    public string? VanityName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoUrl")]
    [Format(FormatKind.Uri)]
    public string? LogoUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
