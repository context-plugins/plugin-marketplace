using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.NetworkApi;

/// <summary>
/// The inputs of the CreateCustomerInvitation operation.
/// </summary>
public sealed record CreateCustomerInvitationRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateInvitationRequestDto Body { get; init; }
}
