using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record ApiKeyList
{
    [JsonPropertyName("keys")]
    public required IReadOnlyList<ApiKeyModel> Keys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
