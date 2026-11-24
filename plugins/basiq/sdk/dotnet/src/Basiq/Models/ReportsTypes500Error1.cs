using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record ReportsTypes500Error1
{
    /// <summary>
    /// Unique identifier for this particular occurrence of the problem.
    /// </summary>
    [JsonPropertyName("correlationId")]
    public required string CorrelationId { get; init; }

    /// <summary>
    /// Error data.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<Data3EnrichApi> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
