using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SlotDefaultValue
{
    /// <summary>
    /// The default value to use when a user doesn't provide a value for a slot.
    /// </summary>
    [JsonPropertyName("defaultValue")]
    public required string DefaultValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
