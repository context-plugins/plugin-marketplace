using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record RunnerResourceClassRequest
{
    /// <summary>
    /// The resource class name in namespace/name format
    /// </summary>
    [JsonPropertyName("resource_class")]
    [RegularExpression("^[a-z0-9-]+/[a-z0-9-]+$")]
    public required string ResourceClass { get; init; }

    /// <summary>
    /// A description of the resource class
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
