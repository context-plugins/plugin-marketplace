using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.AdSets;

/// <summary>
/// The inputs of the UpdateAdSet operation.
/// </summary>
public sealed record UpdateAdSetRequest
{
    /// <summary>
    /// The ID of the ad set
    /// </summary>
    public required string AdSetId { get; init; }

    public required AdSetUpdate Body { get; init; }
}
