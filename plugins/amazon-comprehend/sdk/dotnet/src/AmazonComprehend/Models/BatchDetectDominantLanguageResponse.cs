using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record BatchDetectDominantLanguageResponse
{
    /// <summary>
    /// A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
    /// </summary>
    [JsonPropertyName("ResultList")]
    public required IReadOnlyList<BatchDetectDominantLanguageItemResult> ResultList { get; init; }

    /// <summary>
    /// A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
    /// </summary>
    [JsonPropertyName("ErrorList")]
    public required IReadOnlyList<BatchItemError> ErrorList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
