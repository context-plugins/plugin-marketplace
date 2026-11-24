namespace RelmCrm.Requests.Contacts;

/// <summary>
/// The inputs of the RestoreContact operation.
/// </summary>
public sealed record RestoreContactRequest
{
    public required string Id { get; init; }
}
