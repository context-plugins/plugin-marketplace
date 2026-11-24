using Givebutter.Models;

namespace Givebutter.Requests.HouseholdContacts;

/// <summary>
/// The inputs of the HouseholdsContactsStore operation.
/// </summary>
public sealed record HouseholdsContactsStoreRequest
{
    /// <summary>
    /// The household ID
    /// </summary>
    public required int Household { get; init; }

    public required V1HouseholdsContactsRequest Body { get; init; }
}
