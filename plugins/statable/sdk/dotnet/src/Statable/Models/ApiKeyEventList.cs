using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record ApiKeyEventList
{
    [JsonPropertyName("events")]
    public required IReadOnlyList<ApiKeyEvent> Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
