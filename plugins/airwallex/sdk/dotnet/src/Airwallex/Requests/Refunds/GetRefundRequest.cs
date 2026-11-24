namespace Airwallex.Requests.Refunds;

/// <summary>
/// The inputs of the GetRefund operation.
/// </summary>
public sealed record GetRefundRequest
{
    public required string Id { get; init; }
}
