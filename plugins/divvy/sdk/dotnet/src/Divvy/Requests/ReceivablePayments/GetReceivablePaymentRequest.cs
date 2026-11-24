namespace Divvy.Requests.ReceivablePayments;

/// <summary>
/// The inputs of the GetReceivablePayment operation.
/// </summary>
public sealed record GetReceivablePaymentRequest
{
    public required string ReceivedPaymentId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
