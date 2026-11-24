using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Job cancel result.
/// <para>
/// <c>cancelled</c> counts the non-terminal traces marked <c>cancelling</c>. The rewrite
/// transitions rows in one server-side pass, so there is no running-vs-queued
/// split to report.
/// </para>
/// </summary>
public record CancelJobResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; } = "accepted";

    [JsonPropertyName("cancelled")]
    public required int Cancelled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
