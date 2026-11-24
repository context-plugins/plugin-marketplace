using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cubic.Models.AnyOf;

namespace Cubic.Models;

public record OrganizationList
{
    [JsonPropertyName("organizations")]
    public required IReadOnlyList<Organization> Organizations { get; init; }

    [JsonPropertyName("nextCursor")]
    public required NextCursor NextCursor { get; init; }
}
