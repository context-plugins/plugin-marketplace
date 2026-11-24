using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// A readable folder: the shared team folder, or one member's own files.
/// <para>
/// ``membership_id`` is null for the team folder, which no single member owns.
/// </para>
/// </summary>
public record DataFileGroup
{
    [JsonPropertyName("scope")]
    public required Scope Scope { get; init; }

    [JsonPropertyName("membership_id")]
    public required MembershipId MembershipId { get; init; }

    [JsonPropertyName("file_count")]
    public required int FileCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
