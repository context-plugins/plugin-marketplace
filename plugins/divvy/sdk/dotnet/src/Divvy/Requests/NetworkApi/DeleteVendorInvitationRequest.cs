using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.NetworkApi;

/// <summary>
/// The inputs of the DeleteVendorInvitation operation.
/// </summary>
public sealed record DeleteVendorInvitationRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
