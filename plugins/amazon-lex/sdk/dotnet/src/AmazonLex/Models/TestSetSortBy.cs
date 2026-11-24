using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record TestSetSortBy
{
    /// <summary>
    /// Specifies whether to sort the test sets by name or by the time they were last updated.
    /// </summary>
    [JsonPropertyName("attribute")]
    public required AttributeAmazonLexModelBuildingV2TestsetsApi Attribute { get; init; }

    /// <summary>
    /// Specifies whether to sort in ascending or descending order.
    /// </summary>
    [JsonPropertyName("order")]
    public required OrderAmazonLexModelBuildingV2TestexecutionsApi Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
