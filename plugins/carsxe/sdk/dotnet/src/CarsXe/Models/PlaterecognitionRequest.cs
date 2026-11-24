using System.Text.Json.Serialization;
using CarsXe.Core.Models;

namespace CarsXe.Models;

public record PlaterecognitionRequest
{
    /// <summary>
    /// URL to an image of a vehicle's license plate.
    /// </summary>
    [JsonPropertyName("image_url")]
    public required string ImageUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
