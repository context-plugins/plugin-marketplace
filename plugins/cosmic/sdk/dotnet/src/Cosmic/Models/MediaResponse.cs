using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

public record MediaResponse
{
    /// <summary>
    /// An image, file, or document in the Bucket.
    /// </summary>
    [JsonPropertyName("media")]
    public required Media Media { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
