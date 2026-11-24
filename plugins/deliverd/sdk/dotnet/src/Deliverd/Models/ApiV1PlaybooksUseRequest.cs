using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1PlaybooksUseRequest
{
    /// <summary>
    /// The prompt's inputs, by name; a placeholder not given stays in the words
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputs")]
    public IReadOnlyDictionary<string, string>? Inputs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
