using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Vendors;

/// <summary>
/// The inputs of the CreateBulkVendor operation.
/// </summary>
public sealed record CreateBulkVendorRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(20)]
    public required IReadOnlyList<VendorRequestDto> Body { get; init; }
}
