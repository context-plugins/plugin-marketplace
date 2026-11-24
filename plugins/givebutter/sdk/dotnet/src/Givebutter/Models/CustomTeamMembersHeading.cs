using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

/// <summary>
/// Accepts a <c>string</c> value.
/// </summary>
public record CustomTeamMembersHeading
{
    [JsonPropertyName("name")]
    public string Name { get; } = "custom_team_members_heading";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
