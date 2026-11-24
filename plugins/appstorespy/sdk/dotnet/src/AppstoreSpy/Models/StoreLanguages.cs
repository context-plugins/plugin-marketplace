using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record StoreLanguages
{
    [JsonPropertyName("languages")]
    public required IReadOnlyList<string> Languages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
