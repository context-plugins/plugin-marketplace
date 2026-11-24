using Statable.Models;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the UpdateSite operation.
/// </summary>
public sealed record UpdateSiteOperationRequest
{
    /// <summary>
    /// Numeric site id.
    /// </summary>
    public required long Id { get; init; }

    public required UpdateSiteRequest Body { get; init; }
}
