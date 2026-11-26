using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Payments;

/// <summary>
/// The inputs of the CancelPayment operation.
/// </summary>
public sealed record CancelPaymentRequest
{
    [MinLength(1)]
    public required string PaymentId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
