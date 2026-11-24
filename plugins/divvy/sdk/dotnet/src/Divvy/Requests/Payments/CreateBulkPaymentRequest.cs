using Divvy.Models;

namespace Divvy.Requests.Payments;

/// <summary>
/// The inputs of the CreateBulkPayment operation.
/// </summary>
public sealed record CreateBulkPaymentRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required BulkPaymentRequestDto Body { get; init; }
}
