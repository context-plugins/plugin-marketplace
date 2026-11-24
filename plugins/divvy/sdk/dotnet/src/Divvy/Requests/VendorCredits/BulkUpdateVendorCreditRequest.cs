using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.VendorCredits;

/// <summary>
/// The inputs of the BulkUpdateVendorCredit operation.
/// </summary>
public sealed record BulkUpdateVendorCreditRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<UpdateVendorCreditWithIdRequestDto> Body { get; init; }
}
