using Lusha.Models;

namespace Lusha.Requests.Prospecting;

/// <summary>
/// The inputs of the ProspectingContacts operation.
/// </summary>
public sealed record ProspectingContactsRequest
{
    public required V3ProspectingContactsRequest Body { get; init; }
}
