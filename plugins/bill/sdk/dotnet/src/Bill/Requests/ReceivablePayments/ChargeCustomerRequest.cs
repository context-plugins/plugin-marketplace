using Bill.Models;

namespace Bill.Requests.ReceivablePayments;

/// <summary>
/// The inputs of the ChargeCustomer operation.
/// </summary>
public sealed record ChargeCustomerRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required ChargeCustomerRequestDto Body { get; init; }
}
