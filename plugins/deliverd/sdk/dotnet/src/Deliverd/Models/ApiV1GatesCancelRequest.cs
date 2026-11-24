using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1GatesCancelRequest
{
    /// <summary>
    /// Why, for the record
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    [MaxLength(1000)]
    public string? Note { get; init; }

    /// <summary>
    /// Who you are, when you ask through a person's connection. Registered on first sight and bound to that person. An agent key already says who it is
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent")]
    public AgentDeliverdDevGatesApi? Agent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
