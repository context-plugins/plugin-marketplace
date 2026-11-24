using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record GetCallAnalyticsCategoryRequest
{
    /// <summary>
    /// The name of the Call Analytics category you want information about. Category names are case sensitive.
    /// </summary>
    [JsonPropertyName("CategoryName")]
    public required string CategoryName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
