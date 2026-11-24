using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record ListTagsForResourceInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the resource for which you want to list tags.
    /// </summary>
    [JsonPropertyName("ResourceARN")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// An opaque string that indicates the position at which to begin returning the list of tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Marker")]
    public string? Marker { get; init; }

    /// <summary>
    /// Specifies that the list of tags returned be limited to the specified number of items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Limit")]
    public int? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
