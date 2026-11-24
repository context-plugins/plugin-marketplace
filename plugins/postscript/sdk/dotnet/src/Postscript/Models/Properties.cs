using System.Text.Json.Serialization;
using Postscript.Core.Models;

namespace Postscript.Models;

/// <summary>
/// These are the properties of the event. These properties will be exposed in the Postscript platform for things like filtering and merge tags to merchants.
/// </summary>
public record Properties
{
    /// <summary>
    /// Properties can be key:value pairs. We will attempt to choose the appropriate data type for the value depending on what you send us. We currently accept strings, booleans, integers, floats, and datetime strings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; } = "value";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
