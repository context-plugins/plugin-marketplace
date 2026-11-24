using Upstox.Models;

namespace Upstox.Requests.Payments;

/// <summary>
/// The inputs of the InitiatePayout operation.
/// </summary>
public sealed record InitiatePayoutOperationRequest
{
    public required InitiatePayoutRequest Body { get; init; }
}
