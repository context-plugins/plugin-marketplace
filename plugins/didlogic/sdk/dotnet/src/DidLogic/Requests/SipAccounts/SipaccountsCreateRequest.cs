using DidLogic.Models;

namespace DidLogic.Requests.SipAccounts;

/// <summary>
/// The inputs of the SipaccountsCreate operation.
/// </summary>
public sealed record SipaccountsCreateRequest
{
    public required ApiV1SipaccountsRequest Body { get; init; }
}
