using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record UsersExpenses404Error1
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
    public required IReadOnlyList<Datum2> Data { get; init; }

    /// <summary>
    /// Always "list".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
