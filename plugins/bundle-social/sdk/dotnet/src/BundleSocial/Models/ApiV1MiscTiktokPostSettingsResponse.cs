using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1MiscTiktokPostSettingsResponse
{
    /// <summary>
    /// Values the account accepts for <c>privacy</c>. Public accounts: PUBLIC_TO_EVERYONE, MUTUAL_FOLLOW_FRIENDS, SELF_ONLY. Private accounts: FOLLOWER_OF_CREATOR, MUTUAL_FOLLOW_FRIENDS, SELF_ONLY.
    /// </summary>
    [JsonPropertyName("privacyLevelOptions")]
    public required IReadOnlyList<PrivacyLevelOption> PrivacyLevelOptions { get; init; }

    /// <summary>
    /// If true, comments can't be enabled (the creator allows comments from no one), so send <c>disableComments: true</c>.
    /// </summary>
    [JsonPropertyName("commentDisabled")]
    public required bool CommentDisabled { get; init; }

    /// <summary>
    /// If true, duets can't be enabled (duets set to "Only you", or a private account), so send <c>disableDuet: true</c>.
    /// </summary>
    [JsonPropertyName("duetDisabled")]
    public required bool DuetDisabled { get; init; }

    /// <summary>
    /// If true, stitches can't be enabled (stitches set to "Only you", or a private account), so send <c>disableStitch: true</c>.
    /// </summary>
    [JsonPropertyName("stitchDisabled")]
    public required bool StitchDisabled { get; init; }

    /// <summary>
    /// Longest video, in seconds, this account can publish. Longer videos fail at publish time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxVideoPostDurationSec")]
    public double? MaxVideoPostDurationSec { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
