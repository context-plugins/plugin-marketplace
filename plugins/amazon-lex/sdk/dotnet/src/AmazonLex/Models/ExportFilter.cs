using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ExportFilter
{
    /// <summary>
    /// The name of the field to use for filtering.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; } = "ExportResourceType";

    /// <summary>
    /// The values to use to filter the response. The values must be Bot, BotLocale, or CustomVocabulary.
    /// </summary>
    [JsonPropertyName("values")]
    public required IReadOnlyList<string> Values { get; init; }

    /// <summary>
    /// The operator to use for the filter. Specify EQ when the ListExports operation should return only resource types that equal the specified value. Specify CO when the ListExports operation should return resource types that contain the specified value.
    /// </summary>
    [JsonPropertyName("operator")]
    public required OperatorAmazonLexModelBuildingV2ExportsApi Operator { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
