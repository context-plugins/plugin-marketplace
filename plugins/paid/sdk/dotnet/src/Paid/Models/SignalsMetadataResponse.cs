using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record SignalsMetadataResponse
{
    [JsonPropertyName("signals")]
    public required IReadOnlyList<SignalsMetadataResponseSignalsItems> Signals { get; init; }

    [JsonPropertyName("meta")]
    public required SignalsMetadataResponseMeta Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
