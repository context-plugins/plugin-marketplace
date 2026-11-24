using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ImportSortBy
{
    /// <summary>
    /// The export field to use for sorting.
    /// </summary>
    [JsonPropertyName("attribute")]
    public string Attribute { get; } = "LastUpdatedDateTime";

    /// <summary>
    /// The order to sort the list.
    /// </summary>
    [JsonPropertyName("order")]
    public required OrderAmazonLexModelBuildingV2ExportsApi Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
