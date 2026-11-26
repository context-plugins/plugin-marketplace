namespace Bill.Requests.Payments;

/// <summary>
/// The inputs of the GetMassPayment operation.
/// </summary>
public sealed record GetMassPaymentRequest
{
    public required string PaymentBatchId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
