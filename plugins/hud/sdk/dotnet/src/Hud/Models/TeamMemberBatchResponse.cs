using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Memberships the change applied to, and why it did not apply to the rest.
/// </summary>
public record TeamMemberBatchResponse
{
    [JsonPropertyName("succeeded")]
    public required IReadOnlyList<int> Succeeded { get; init; }

    [JsonPropertyName("failed")]
    public required IReadOnlyList<TeamMemberFailure> Failed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
