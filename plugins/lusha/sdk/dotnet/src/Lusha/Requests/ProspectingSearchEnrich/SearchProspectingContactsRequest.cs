using Lusha.Models;

namespace Lusha.Requests.ProspectingSearchEnrich;

/// <summary>
/// The inputs of the SearchProspectingContacts operation.
/// </summary>
public sealed record SearchProspectingContactsRequest
{
    public required ContactSearchRequest Body { get; init; }
}
