using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record GenerationSortBy
{
    /// <summary>
    /// The attribute by which to sort the generation request information. You can sort by the following attributes. creationStartTime – The time at which the generation request was created. lastUpdatedTime – The time at which the generation request was last updated.
    /// </summary>
    [JsonPropertyName("attribute")]
    public required Attribute1 Attribute { get; init; }

    /// <summary>
    /// The order by which to sort the generation request information.
    /// </summary>
    [JsonPropertyName("order")]
    public required Order10 Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
