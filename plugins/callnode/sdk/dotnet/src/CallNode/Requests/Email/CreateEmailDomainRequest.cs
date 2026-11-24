using CallNode.Models;

namespace CallNode.Requests.Email;

/// <summary>
/// The inputs of the CreateEmailDomain operation.
/// </summary>
public sealed record CreateEmailDomainRequest
{
    public required ApiV1EmailDomainsRequest Body { get; init; }
}
