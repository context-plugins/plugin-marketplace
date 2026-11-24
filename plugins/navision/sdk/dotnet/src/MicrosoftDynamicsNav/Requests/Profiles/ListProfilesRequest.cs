using System;

namespace MicrosoftDynamicsNav.Requests.Profiles;

/// <summary>
/// The inputs of the ListProfiles operation.
/// </summary>
public sealed record ListProfilesRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
