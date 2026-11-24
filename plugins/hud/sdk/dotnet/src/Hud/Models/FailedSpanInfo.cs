using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// A telemetry span that failed to ingest — a gap in the trajectory.
/// </summary>
public record FailedSpanInfo
{
    [JsonPropertyName("seq")]
    public required int Seq { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
