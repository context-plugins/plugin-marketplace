using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record V1DataplaneEvaluatecodeRequest
{
    [JsonPropertyName("runtime")]
    public required AppSyncRuntime Runtime { get; init; }

    /// <summary>
    /// The code definition to be evaluated. Note that code and runtime are both required for this action. The runtime value must be APPSYNC_JS.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// The map that holds all of the contextual information for your resolver invocation. A context is required for this action.
    /// </summary>
    [JsonPropertyName("context")]
    public required string Context { get; init; }

    /// <summary>
    /// The function within the code to be evaluated. If provided, the valid values are request and response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("function")]
    public string? Function { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
