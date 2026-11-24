namespace Givebutter.Requests.HouseholdContacts;

/// <summary>
/// The inputs of the HouseholdsContactsShow operation.
/// </summary>
public sealed record HouseholdsContactsShowRequest
{
    /// <summary>
    /// The household ID
    /// </summary>
    public required int Household { get; init; }

    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }
}
