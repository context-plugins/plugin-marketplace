using System.Collections.Generic;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record Metadata
{
    [JsonPropertyName("defaultDomains")]
    public required IReadOnlyList<string> DefaultDomains { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
