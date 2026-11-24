using System.Text.Json.Serialization;

namespace SalesforceServiceCloud.Models;

/// <summary>
/// Configuration of additional information returned in the response payload.
/// </summary>
public record ResponseOptions
{
    /// <summary>
    /// Variables returned in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public ResponseOptionsVariables? Variables { get; init; }

    /// <summary>
    /// Indicates whether to include metrics in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public bool? Metrics { get; init; }

    /// <summary>
    /// Indicates whether to include all intents detected when processing the current request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intents")]
    public bool? Intents { get; init; }

    /// <summary>
    /// Indicates whether to include all entities detected when processing the current request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entities")]
    public bool? Entities { get; init; }
}
