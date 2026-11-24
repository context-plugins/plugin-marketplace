using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsVersionsResponse2
{
    [JsonPropertyName("versions")]
    public required IReadOnlyList<VersionDeliverdDevReportsApi> Versions { get; init; }

    /// <summary>
    /// Pass back as ?cursor= for the next page. Null means this is the end.
    /// </summary>
    [JsonPropertyName("nextCursor")]
    public required string? NextCursor { get; init; }

    [JsonPropertyName("currentVersionId")]
    public required Guid? CurrentVersionId { get; init; }

    /// <summary>
    /// The newest version number, live or not. This is what <c>expectedVersion</c> compares against; after a declined publish it is ahead of the current version.
    /// </summary>
    [JsonPropertyName("latestVersion")]
    public required double? LatestVersion { get; init; }

    /// <summary>
    /// The version waiting on an approver, if one is.
    /// </summary>
    [JsonPropertyName("pendingApproval")]
    public required PendingApproval? PendingApproval { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
