namespace Givebutter.Requests.HouseholdContacts;

/// <summary>
/// The inputs of the HouseholdsContactsIndex operation.
/// </summary>
public sealed record HouseholdsContactsIndexRequest
{
    /// <summary>
    /// The household ID
    /// </summary>
    public required int Household { get; init; }
}
