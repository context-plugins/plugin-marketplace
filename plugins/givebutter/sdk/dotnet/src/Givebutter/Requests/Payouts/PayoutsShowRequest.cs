namespace Givebutter.Requests.Payouts;

/// <summary>
/// The inputs of the PayoutsShow operation.
/// </summary>
public sealed record PayoutsShowRequest
{
    /// <summary>
    /// The payout number
    /// </summary>
    public required string Payout { get; init; }
}
