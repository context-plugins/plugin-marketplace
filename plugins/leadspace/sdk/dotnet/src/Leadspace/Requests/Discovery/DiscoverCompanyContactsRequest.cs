using Leadspace.Models;

namespace Leadspace.Requests.Discovery;

/// <summary>
/// The inputs of the DiscoverCompanyContacts operation.
/// </summary>
public sealed record DiscoverCompanyContactsRequest
{
    public required DiscoveryRequest Body { get; init; }
}
