using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.NetworkApi;

/// <summary>
/// The inputs of the CreateVendorInvitation operation.
/// </summary>
public sealed record CreateVendorInvitationRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateInvitationRequestDto Body { get; init; }
}
