using System;
using AgentReady.Core.Validation.Attributes;

namespace AgentReady.Requests.Scans;

/// <summary>
/// The inputs of the ListScans operation.
/// </summary>
public sealed record ListScansRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor (ISO 8601 datetime returned as <c>nextCursor</c> by a previous response). Returns scans strictly older than the cursor.
    /// </summary>
    public DateTimeOffset? Cursor { get; init; }
}
