using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record SubscriptionsCancelRequest
{
    /// <summary>
    /// 1 = cancel at end of current cycle; 0 = cancel immediately.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancel_at_cycle_end")]
    public CancelAtCycleEnd? CancelAtCycleEnd { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
