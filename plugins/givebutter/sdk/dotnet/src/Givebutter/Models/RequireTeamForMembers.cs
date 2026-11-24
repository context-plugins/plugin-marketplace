using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

/// <summary>
/// Accepts a <c>boolean</c> value.
/// </summary>
public record RequireTeamForMembers
{
    [JsonPropertyName("name")]
    public string Name { get; } = "require_team_for_members";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public bool? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
