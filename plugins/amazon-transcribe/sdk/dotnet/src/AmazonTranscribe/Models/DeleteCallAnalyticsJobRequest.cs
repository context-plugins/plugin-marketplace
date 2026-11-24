using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record DeleteCallAnalyticsJobRequest
{
    /// <summary>
    /// The name of the Call Analytics job you want to delete. Job names are case sensitive.
    /// </summary>
    [JsonPropertyName("CallAnalyticsJobName")]
    public required string CallAnalyticsJobName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
