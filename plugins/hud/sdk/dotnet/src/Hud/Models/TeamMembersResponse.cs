using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TeamMembersResponse
{
    [JsonPropertyName("members")]
    public required IReadOnlyList<TeamMemberItem> Members { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
