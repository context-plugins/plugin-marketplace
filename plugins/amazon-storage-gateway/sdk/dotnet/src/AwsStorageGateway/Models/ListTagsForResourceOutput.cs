using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record ListTagsForResourceOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the resource for which you want to list tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceARN")]
    public string? ResourceArn { get; init; }

    /// <summary>
    /// An opaque string that indicates the position at which to stop returning the list of tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Marker")]
    public string? Marker { get; init; }

    /// <summary>
    /// An array that contains the tags for the specified resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
