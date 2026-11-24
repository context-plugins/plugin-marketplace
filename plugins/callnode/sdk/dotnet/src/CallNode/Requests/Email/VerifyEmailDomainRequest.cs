namespace CallNode.Requests.Email;

/// <summary>
/// The inputs of the VerifyEmailDomain operation.
/// </summary>
public sealed record VerifyEmailDomainRequest
{
    public required string Id { get; init; }
}
