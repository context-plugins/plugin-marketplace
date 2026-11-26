using Bill.Models;

namespace Bill.Requests.Payments;

/// <summary>
/// The inputs of the CreateMassPayment operation.
/// </summary>
public sealed record CreateMassPaymentRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required BulkPaymentRequestDto Body { get; init; }
}
