using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// A list of global field definitions in the stack.
/// </summary>
public record GlobalFieldList
{
    /// <summary>
    /// Array of global field objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("global_fields")]
    public IReadOnlyList<GlobalField>? GlobalFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
