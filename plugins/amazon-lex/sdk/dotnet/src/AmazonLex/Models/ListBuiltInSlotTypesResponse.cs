using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBuiltInSlotTypesResponse
{
    /// <summary>
    /// Summary information for the built-in slot types that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more slot types available, the nextToken field contains a token to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("builtInSlotTypeSummaries")]
    public IReadOnlyList<BuiltInSlotTypeSummary>? BuiltInSlotTypeSummaries { get; init; }

    /// <summary>
    /// A token that indicates whether there are more results to return in a response to the ListBuiltInSlotTypes operation. If the nextToken field is present, you send the contents as the nextToken parameter of a LIstBuiltInSlotTypes operation request to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The language and locale of the slot types in the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
