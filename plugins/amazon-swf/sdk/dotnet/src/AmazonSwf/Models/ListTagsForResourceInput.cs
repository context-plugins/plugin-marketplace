using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ListTagsForResourceInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) for the Amazon SWF domain.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
