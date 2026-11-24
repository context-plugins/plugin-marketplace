using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Addresses that were invited, and why each remaining address was not.
/// </summary>
public record TeamInviteResponse
{
    [JsonPropertyName("succeeded")]
    public required IReadOnlyList<string> Succeeded { get; init; }

    [JsonPropertyName("failed")]
    public required IReadOnlyList<TeamInviteFailure> Failed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
