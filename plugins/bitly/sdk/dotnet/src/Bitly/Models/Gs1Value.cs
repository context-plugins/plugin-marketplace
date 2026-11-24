using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record Gs1Value
{
    /// <summary>
    /// A valid GS1 application identifier, qualifier, attribute, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// A syntactically correct value associated with the application identifier in the key field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
