using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record MarginRequest
{
    /// <summary>
    /// instruments
    /// </summary>
    [JsonPropertyName("instruments")]
    public required IReadOnlyList<Instrument> Instruments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
