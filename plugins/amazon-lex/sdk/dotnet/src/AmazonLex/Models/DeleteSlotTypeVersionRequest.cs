using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteSlotTypeVersionRequest
{
    /// <summary>
    /// The name of the slot type.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The version of the slot type to delete. You cannot delete the $LATEST version of the slot type. To delete the $LATEST version, use the DeleteSlotType operation.
    /// </summary>
    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
