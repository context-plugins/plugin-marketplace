namespace DidLogic.Requests.Calls;

/// <summary>
/// The inputs of the CallPriceShow operation.
/// </summary>
public sealed record CallPriceShowRequest
{
    /// <summary>
    /// Caller ID the call presents; up to 5 digits means anonymous
    /// </summary>
    public required string ANumber { get; init; }

    /// <summary>
    /// Number to call, E.164 (a leading + is accepted)
    /// </summary>
    public required string BNumber { get; init; }

    /// <summary>
    /// SIP account name from sipaccounts_index, the account placing the call
    /// </summary>
    public required string Sipaccount { get; init; }
}
