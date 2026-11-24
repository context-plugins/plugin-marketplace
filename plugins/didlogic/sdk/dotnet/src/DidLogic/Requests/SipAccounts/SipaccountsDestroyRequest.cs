namespace DidLogic.Requests.SipAccounts;

/// <summary>
/// The inputs of the SipaccountsDestroy operation.
/// </summary>
public sealed record SipaccountsDestroyRequest
{
    /// <summary>
    /// SIP account name or id from sipaccounts_index, sipaccounts_create: the account <b>name</b> (e.g. <c>01234</c>, which may start with <c>0</c>) or the numeric <b>id</b> (e.g. <c>73</c>). Both resolve the same account.
    /// </summary>
    public required string Id { get; init; }
}
