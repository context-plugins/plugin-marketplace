namespace RelmCrm.Requests.Contacts;

/// <summary>
/// The inputs of the GetContact operation.
/// </summary>
public sealed record GetContactRequest
{
    public required string Id { get; init; }
}
