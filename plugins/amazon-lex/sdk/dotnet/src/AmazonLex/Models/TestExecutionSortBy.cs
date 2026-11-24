using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record TestExecutionSortBy
{
    /// <summary>
    /// Specifies whether to sort the test set executions by the date and time at which the test sets were created.
    /// </summary>
    [JsonPropertyName("attribute")]
    public required AttributeAmazonLexModelBuildingV2TestexecutionsApi Attribute { get; init; }

    /// <summary>
    /// Specifies whether to sort in ascending or descending order.
    /// </summary>
    [JsonPropertyName("order")]
    public required OrderAmazonLexModelBuildingV2TestexecutionsApi Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
