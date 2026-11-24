using Lili.Models;

namespace Lili.Requests;

/// <summary>
/// The inputs of the PutLiliApiV1Payments operation.
/// </summary>
public sealed record PutLiliApiV1PaymentsRequest
{
    public PaymentRequest? Body { get; init; }
}
