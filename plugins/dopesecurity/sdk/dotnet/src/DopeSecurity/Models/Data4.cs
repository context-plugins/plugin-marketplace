using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Data4
{
    [JsonPropertyName("users")]
    public required IReadOnlyList<AssignedUser> Users { get; init; }

    [JsonPropertyName("groups")]
    public required IReadOnlyList<AssignedGroup> Groups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
