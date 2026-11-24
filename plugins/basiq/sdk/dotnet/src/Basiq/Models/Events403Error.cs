using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Events403Error
{
    /// <summary>
    /// Always "list".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Unique identifier for this particular occurrence of the problem.
    /// </summary>
    [JsonPropertyName("correlationId")]
    public required string CorrelationId { get; init; }

    /// <summary>
    /// Error data.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<Datum3> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
