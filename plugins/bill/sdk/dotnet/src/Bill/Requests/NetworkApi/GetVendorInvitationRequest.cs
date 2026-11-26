using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.NetworkApi;

/// <summary>
/// The inputs of the GetVendorInvitation operation.
/// </summary>
public sealed record GetVendorInvitationRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
