using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record SignalsMetadataResponseSignalsItems
{
    [JsonPropertyName("signalName")]
    public required string SignalName { get; init; }

    [JsonPropertyName("paths")]
    public required IReadOnlyList<SignalsMetadataResponseSignalsItemsPathsItems> Paths { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
