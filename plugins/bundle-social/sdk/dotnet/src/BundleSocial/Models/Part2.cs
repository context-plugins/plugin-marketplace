using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record Part2
{
    [JsonPropertyName("partNumber")]
    [Minimum(1)]
    [Maximum(10000)]
    public required int PartNumber { get; init; }

    [JsonPropertyName("etag")]
    [MinLength(1)]
    public required string Etag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
