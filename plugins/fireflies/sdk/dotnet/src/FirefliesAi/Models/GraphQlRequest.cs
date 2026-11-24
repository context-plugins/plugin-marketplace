using System.Text.Json.Serialization;
using FirefliesAi.Core.Models;

namespace FirefliesAi.Models;

public record GraphQlRequest
{
    /// <summary>
    /// The GraphQL query or mutation string
    /// </summary>
    [JsonPropertyName("query")]
    public required string Query { get; init; }

    /// <summary>
    /// Variables referenced in the query string
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public object? Variables { get; init; }

    /// <summary>
    /// Optional name of the operation to execute (for multi-operation documents)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationName")]
    public string? OperationName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
