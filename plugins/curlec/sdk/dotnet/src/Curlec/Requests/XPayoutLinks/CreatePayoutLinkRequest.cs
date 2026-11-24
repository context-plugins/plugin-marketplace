using Curlec.Models;

namespace Curlec.Requests.XPayoutLinks;

/// <summary>
/// The inputs of the CreatePayoutLink operation.
/// </summary>
public sealed record CreatePayoutLinkRequest
{
    public required PayoutLinksRequest Body { get; init; }
}
