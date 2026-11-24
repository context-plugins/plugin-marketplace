namespace Givebutter.Requests.HouseholdContacts;

/// <summary>
/// The inputs of the HouseholdsContactsDestroy operation.
/// </summary>
public sealed record HouseholdsContactsDestroyRequest
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
