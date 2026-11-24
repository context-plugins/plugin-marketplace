namespace Airwallex.Requests.Payouts;

/// <summary>
/// The inputs of the GetPayout operation.
/// </summary>
public sealed record GetPayoutRequest
{
    public required string Id { get; init; }
}
