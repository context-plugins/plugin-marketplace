using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record UsersTransactions403Error
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
    public required IReadOnlyList<Datum2ConnectionsApi> Data { get; init; }

    /// <summary>
    /// Always "list".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
