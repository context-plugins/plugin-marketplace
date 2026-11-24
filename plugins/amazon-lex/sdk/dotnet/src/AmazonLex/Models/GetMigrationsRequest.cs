using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record GetMigrationsRequest
{
    /// <summary>
    /// The field to sort the list of migrations by. You can sort by the Amazon Lex V1 bot name or the date and time that the migration was started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortByAttribute")]
    public SortByAttribute? SortByAttribute { get; init; }

    /// <summary>
    /// The order so sort the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortByOrder")]
    public SortByOrder? SortByOrder { get; init; }

    /// <summary>
    /// Filters the list to contain only bots whose name contains the specified string. The string is matched anywhere in bot name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v1BotNameContains")]
    public string? V1BotNameContains { get; init; }

    /// <summary>
    /// Filters the list to contain only migrations in the specified state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationStatusEquals")]
    public MigrationStatusEquals? MigrationStatusEquals { get; init; }

    /// <summary>
    /// The maximum number of migrations to return in the response. The default is 10.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// A pagination token that fetches the next page of migrations. If the response to this operation is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of migrations, specify the pagination token in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
