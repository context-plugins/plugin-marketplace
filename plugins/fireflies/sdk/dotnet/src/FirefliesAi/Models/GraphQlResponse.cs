using System.Collections.Generic;
using System.Text.Json.Serialization;
using FirefliesAi.Core.Models;

namespace FirefliesAi.Models;

public record GraphQlResponse
{
    /// <summary>
    /// The result data returned by the GraphQL operation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public object? Data { get; init; }

    /// <summary>
    /// GraphQL errors, if any
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<GraphQlError>? Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
