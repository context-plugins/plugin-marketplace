using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record PipelineSelectorProperties
{
    /// <summary>
    /// The type of selector.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeBitbucketPipelinesApi? Type { get; init; }

    /// <summary>
    /// The name of the matching pipeline definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pattern")]
    public string? Pattern { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
