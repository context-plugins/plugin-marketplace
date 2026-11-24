using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record ResumeResourceRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the monitor resource to resume.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
