using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record KendraConfiguration
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as the Amazon Lex bot.
    /// </summary>
    [JsonPropertyName("kendraIndex")]
    public required string KendraIndex { get; init; }

    /// <summary>
    /// Determines whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra index.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryFilterStringEnabled")]
    public bool? QueryFilterStringEnabled { get; init; }

    /// <summary>
    /// A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The filter is in the format defined by Amazon Kendra. For more information, see Filtering queries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryFilterString")]
    public string? QueryFilterString { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
