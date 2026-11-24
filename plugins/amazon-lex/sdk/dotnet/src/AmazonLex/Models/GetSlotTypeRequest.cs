using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetSlotTypeRequest
{
    /// <summary>
    /// The name of the slot type. The name is case sensitive.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The version of the slot type.
    /// </summary>
    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
