using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record V1DataplaneEvaluatetemplateRequest
{
    /// <summary>
    /// The mapping template; this can be a request or response template. A template is required for this action.
    /// </summary>
    [JsonPropertyName("template")]
    public required string Template { get; init; }

    /// <summary>
    /// The map that holds all of the contextual information for your resolver invocation. A context is required for this action.
    /// </summary>
    [JsonPropertyName("context")]
    public required string Context { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
