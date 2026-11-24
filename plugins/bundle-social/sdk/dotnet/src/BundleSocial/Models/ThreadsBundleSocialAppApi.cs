using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ThreadsBundleSocialAppApi
{
    [JsonPropertyName("status")]
    public required StatusBundleSocialAppApi Status { get; init; }

    [JsonPropertyName("note")]
    public required string Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
