using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record SyncTemplatesResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<SyncTemplate> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
