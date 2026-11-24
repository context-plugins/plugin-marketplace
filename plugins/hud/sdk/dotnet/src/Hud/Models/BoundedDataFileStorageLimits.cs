using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Concrete storage capacity for a metered team.
/// </summary>
public record BoundedDataFileStorageLimits
{
    [JsonPropertyName("kind")]
    public string Kind { get; } = "bounded";

    [JsonPropertyName("max_files_per_member")]
    public required int MaxFilesPerMember { get; init; }

    [JsonPropertyName("max_member_bytes")]
    public required int MaxMemberBytes { get; init; }

    [JsonPropertyName("max_shared_files")]
    public required int MaxSharedFiles { get; init; }

    [JsonPropertyName("max_shared_bytes")]
    public required int MaxSharedBytes { get; init; }

    [JsonPropertyName("max_team_files")]
    public required int MaxTeamFiles { get; init; }

    [JsonPropertyName("max_team_bytes")]
    public required int MaxTeamBytes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
