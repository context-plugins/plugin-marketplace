using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DetectToxicContentResponse
{
    /// <summary>
    /// Results of the content moderation analysis. Each entry in the results list contains a list of toxic content types identified in the text, along with a confidence score for each content type. The results list also includes a toxicity score for each entry in the results list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResultList")]
    public IReadOnlyList<ToxicLabels>? ResultList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
