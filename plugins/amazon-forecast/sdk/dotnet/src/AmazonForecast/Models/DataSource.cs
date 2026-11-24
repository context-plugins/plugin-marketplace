using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DataSource
{
    [JsonPropertyName("S3Config")]
    public required S3Config S3Config { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
