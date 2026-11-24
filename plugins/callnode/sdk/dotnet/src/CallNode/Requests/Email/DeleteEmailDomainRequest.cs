namespace CallNode.Requests.Email;

/// <summary>
/// The inputs of the DeleteEmailDomain operation.
/// </summary>
public sealed record DeleteEmailDomainRequest
{
    public required string Id { get; init; }
}
