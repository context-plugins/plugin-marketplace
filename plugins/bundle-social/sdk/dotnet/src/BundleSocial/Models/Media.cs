using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

/// <summary>
/// Up to 12 recent public media items
/// </summary>
public record Media
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<Data1> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
