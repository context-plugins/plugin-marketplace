using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.NetworkApi;

/// <summary>
/// The inputs of the InviteVendorNotInBillNetwork operation.
/// </summary>
public sealed record InviteVendorNotInBillNetworkRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required InviteVendorNotInBillNetworkRequestDto Body { get; init; }
}
