using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record DecisionEngineRunResponse
{
    /// <summary>
    /// Number of flows that were enqueued for execution
    /// </summary>
    [JsonPropertyName("flowsEnqueued")]
    public required double FlowsEnqueued { get; init; }
}
