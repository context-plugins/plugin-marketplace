using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

public record ApiSqlRequest
{
    /// <summary>
    /// A single read-only SELECT (or WITH ... SELECT) statement.
    /// </summary>
    [JsonPropertyName("sql")]
    public required string Sql { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
