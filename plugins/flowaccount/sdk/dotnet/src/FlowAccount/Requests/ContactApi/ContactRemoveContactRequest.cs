namespace FlowAccount.Requests.ContactApi;

/// <summary>
/// The inputs of the ContactRemoveContact operation.
/// </summary>
public sealed record ContactRemoveContactRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
