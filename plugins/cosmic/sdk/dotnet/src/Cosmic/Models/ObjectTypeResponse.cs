using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

public record ObjectTypeResponse
{
    /// <summary>
    /// The content model shared by every Object in the type.
    /// </summary>
    [JsonPropertyName("object_type")]
    public required ObjectType ObjectType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
