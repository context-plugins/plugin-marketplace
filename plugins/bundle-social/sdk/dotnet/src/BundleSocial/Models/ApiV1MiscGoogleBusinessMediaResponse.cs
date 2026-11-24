using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;
using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessMediaResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("googleUrl")]
    [Format(FormatKind.Uri)]
    public string? GoogleUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mediaFormat")]
    public MediaFormat? MediaFormat { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceUrl")]
    [Format(FormatKind.Uri)]
    public string? SourceUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnailUrl")]
    [Format(FormatKind.Uri)]
    public string? ThumbnailUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationAssociation")]
    public LocationAssociation? LocationAssociation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
