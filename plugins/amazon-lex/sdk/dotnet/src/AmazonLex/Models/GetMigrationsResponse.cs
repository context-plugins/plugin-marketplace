using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetMigrationsResponse
{
    /// <summary>
    /// An array of summaries for migrations from Amazon Lex V1 to Amazon Lex V2. To see details of the migration, use the migrationId from the summary in a call to the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationSummaries")]
    public IReadOnlyList<MigrationSummary>? MigrationSummaries { get; init; }

    /// <summary>
    /// If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of migrations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
