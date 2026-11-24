using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record Tag
{
    /// <summary>
    /// The first part of a key:value pair that forms a tag associated with a given resource. For example, in the tag Department:Sales, the key is 'Department'.
    /// </summary>
    [JsonPropertyName("Key")]
    public required string Key { get; init; }

    /// <summary>
    /// The second part of a key:value pair that forms a tag associated with a given resource. For example, in the tag Department:Sales, the value is 'Sales'. Note that you can set the value of a tag to an empty string, but you can't set the value of a tag to null. Omitting the tag value is the same as using an empty string.
    /// </summary>
    [JsonPropertyName("Value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
