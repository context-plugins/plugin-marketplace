using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record DecisionEngineFlowMessagesClone500Error
{
    /// <summary>
    /// Why the request failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
