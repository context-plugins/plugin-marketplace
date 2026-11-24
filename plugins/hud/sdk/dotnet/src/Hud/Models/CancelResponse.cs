using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// One trace's cancel result.
/// <para>
/// Cancellation is two-phase: <c>accepted</c> means the trace was marked
/// <c>cancelling</c> and finalization enqueued; <c>noop</c> means nothing transitioned
/// (already terminal, or not found).
/// </para>
/// </summary>
public record CancelResponse
{
    [JsonPropertyName("status")]
    public required StatusHudPlatformRolloutsApi Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
