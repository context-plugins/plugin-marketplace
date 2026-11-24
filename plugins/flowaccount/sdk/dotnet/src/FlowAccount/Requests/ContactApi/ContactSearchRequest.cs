namespace FlowAccount.Requests.ContactApi;

/// <summary>
/// The inputs of the ContactSearch operation.
/// </summary>
public sealed record ContactSearchRequest
{
    public required string Culture { get; init; }
}
