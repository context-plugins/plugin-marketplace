using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.Pages;

/// <summary>
/// The inputs of the SubscribePageApp operation.
/// </summary>
public sealed record SubscribePageAppRequest
{
    /// <summary>
    /// The ID of the Facebook Page
    /// </summary>
    public required string PageId { get; init; }

    public required SubscribedAppsRequest Body { get; init; }
}
