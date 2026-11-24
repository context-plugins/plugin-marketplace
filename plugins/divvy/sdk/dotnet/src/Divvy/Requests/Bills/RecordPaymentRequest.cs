using Divvy.Models;

namespace Divvy.Requests.Bills;

/// <summary>
/// The inputs of the RecordPayment operation.
/// </summary>
public sealed record RecordPaymentRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required RecordPaymentRequestDto Body { get; init; }
}
