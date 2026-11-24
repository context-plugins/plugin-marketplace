using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record AlertSlackChannelList
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<AlertSlackChannel> Items { get; init; }

    /// <summary>
    /// Total eligible channels after filtering and before pagination.
    /// </summary>
    [JsonPropertyName("rowCount")]
    public required int RowCount { get; init; }

    /// <summary>
    /// Opaque continuation token. Omitted on the final page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Integration status. Reconnect for inactive; grant private-channel scopes for missing_private_scope. None means no usable workspace was found; a shared channel may still be available.
    /// </summary>
    [JsonPropertyName("workspaceStatus")]
    public required WorkspaceStatus WorkspaceStatus { get; init; }

    [JsonPropertyName("isWorkspaceConnected")]
    public required bool IsWorkspaceConnected { get; init; }

    [JsonPropertyName("hasSharedChannel")]
    public required bool HasSharedChannel { get; init; }

    /// <summary>
    /// Whether the channel list is complete. False when a transient Slack failure prevented a full listing; callers that validate channel availability should not treat a partial list as authoritative.
    /// </summary>
    [JsonPropertyName("channelsComplete")]
    public required bool ChannelsComplete { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
