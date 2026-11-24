namespace FlowAccount.Requests.ContactApi;

/// <summary>
/// The inputs of the ContactGetContactList2 operation.
/// </summary>
public sealed record ContactGetContactList2Request
{
    public required long? Id { get; init; }

    public required string Culture { get; init; }
}
