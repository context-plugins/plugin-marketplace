namespace FlowAccount.Requests.ContactApi;

/// <summary>
/// The inputs of the ContactGetContactList operation.
/// </summary>
public sealed record ContactGetContactListRequest
{
    public required long? Id { get; init; }

    public required string Culture { get; init; }
}
