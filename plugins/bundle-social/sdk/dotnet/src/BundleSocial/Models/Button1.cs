using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record Button1
{
    [JsonPropertyName("id")]
    [StringLength(36, MinimumLength = 1)]
    public required string Id { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "URL";

    [JsonPropertyName("label")]
    [StringLength(20, MinimumLength = 1)]
    public required string Label { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
