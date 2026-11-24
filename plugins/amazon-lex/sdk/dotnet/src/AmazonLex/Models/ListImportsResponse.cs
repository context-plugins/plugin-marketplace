using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListImportsResponse
{
    /// <summary>
    /// The unique identifier assigned by Amazon Lex to the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The version of the bot that was imported. It will always be DRAFT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// Summary information for the imports that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter. If there are more imports available, the nextToken field contains a token to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importSummaries")]
    public IReadOnlyList<ImportSummary>? ImportSummaries { get; init; }

    /// <summary>
    /// A token that indicates whether there are more results to return in a response to the ListImports operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListImports operation request to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The locale specified in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
