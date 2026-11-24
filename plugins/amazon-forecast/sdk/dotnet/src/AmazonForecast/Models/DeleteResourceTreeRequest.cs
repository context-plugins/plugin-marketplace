using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DeleteResourceTreeRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the parent resource to delete. All child resources of the parent resource will also be deleted.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
