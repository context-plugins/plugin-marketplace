using System.Collections.Generic;
using System.Text.Json.Serialization;
using S1.Core.Models;

namespace S1.Models;

public record AskResponse
{
    /// <summary>
    /// The query as sent.
    /// </summary>
    [JsonPropertyName("query")]
    public required string Query { get; init; }

    /// <summary>
    /// How the request was interpreted and searched.
    /// </summary>
    [JsonPropertyName("intent")]
    public required Intent Intent { get; init; }

    /// <summary>
    /// Relevant results from every engine, best first, with duplicates merged. May be empty.
    /// </summary>
    [JsonPropertyName("results")]
    public required IReadOnlyList<AskResult> Results { get; init; }

    /// <summary>
    /// Engines that failed while others completed. The request is still charged.
    /// </summary>
    [JsonPropertyName("errors")]
    public required IReadOnlyList<Error1> Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
