using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.VendorCredits;

/// <summary>
/// The inputs of the BulkCreateVendorCredit operation.
/// </summary>
public sealed record BulkCreateVendorCreditRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<CreateVendorCreditRequestDto> Body { get; init; }
}
