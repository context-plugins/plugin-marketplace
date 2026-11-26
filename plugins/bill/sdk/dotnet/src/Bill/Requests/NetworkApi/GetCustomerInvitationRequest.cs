using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.NetworkApi;

/// <summary>
/// The inputs of the GetCustomerInvitation operation.
/// </summary>
public sealed record GetCustomerInvitationRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
