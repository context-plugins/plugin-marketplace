using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cubic.Models.AnyOf;

namespace Cubic.Models;

public record MemberList
{
    [JsonPropertyName("members")]
    public required IReadOnlyList<OrganizationMember> Members { get; init; }

    [JsonPropertyName("nextCursor")]
    public required NextCursor NextCursor { get; init; }
}
