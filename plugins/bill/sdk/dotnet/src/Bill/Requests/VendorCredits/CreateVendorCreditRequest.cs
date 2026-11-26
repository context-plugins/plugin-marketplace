using Bill.Models;

namespace Bill.Requests.VendorCredits;

/// <summary>
/// The inputs of the CreateVendorCredit operation.
/// </summary>
public sealed record CreateVendorCreditRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateVendorCreditRequestDto Body { get; init; }
}
