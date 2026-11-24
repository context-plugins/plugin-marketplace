using Divvy.Models;

namespace Divvy.Requests.Payments;

/// <summary>
/// The inputs of the CreatePayment operation.
/// </summary>
public sealed record CreatePaymentRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required PaymentRequestDto Body { get; init; }
}
