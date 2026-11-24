using System.Collections.Generic;

namespace CodeQr.Requests.Links;

/// <summary>
/// The inputs of the BulkDeleteLinks operation.
/// </summary>
public sealed record BulkDeleteLinksRequest
{
    /// <summary>
    /// Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored.
    /// </summary>
    public required IReadOnlyList<string> LinkIds { get; init; }
}
