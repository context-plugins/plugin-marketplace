using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ModelsLexKendraConfiguration
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as the Amazon Lex bot. If the Amazon Kendra index does not exist, you get an exception when you call the PutIntent operation.
    /// </summary>
    [JsonPropertyName("kendraIndex")]
    public required string KendraIndex { get; init; }

    /// <summary>
    /// A query filter that Amazon Lex sends to Amazon Kendra to filter the response from the query. The filter is in the format defined by Amazon Kendra. For more information, see Filtering queries. You can override this filter string with a new filter string at runtime.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryFilterString")]
    public string? QueryFilterString { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an IAM role that has permission to search the Amazon Kendra index. The role must be in the same account and Region as the Amazon Lex bot. If the role does not exist, you get an exception when you call the PutIntent operation.
    /// </summary>
    [JsonPropertyName("role")]
    public required string Role { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
