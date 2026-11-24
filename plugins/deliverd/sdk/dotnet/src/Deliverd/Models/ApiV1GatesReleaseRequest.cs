using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1GatesReleaseRequest
{
    /// <summary>
    /// Who you are, when you ask through a person's connection. Registered on first sight and bound to that person. An agent key already says who it is
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent")]
    public AgentDeliverdDevGatesApi? Agent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
