namespace RelmCrm.Requests.Contacts;

/// <summary>
/// The inputs of the DeleteContact operation.
/// </summary>
public sealed record DeleteContactRequest
{
    public required string Id { get; init; }
}
