using System.Text.Json.Serialization;
using CarsXe.Core.Models;

namespace CarsXe.Models;

public record V1VinocrRequest
{
    /// <summary>
    /// URL to an image, or the base64 string of the image.
    /// </summary>
    [JsonPropertyName("image_url")]
    public required string ImageUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
