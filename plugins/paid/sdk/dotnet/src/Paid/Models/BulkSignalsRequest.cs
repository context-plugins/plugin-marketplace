using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record BulkSignalsRequest
{
    [JsonPropertyName("signals")]
    public required IReadOnlyList<Signal> Signals { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
