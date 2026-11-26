using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.NetworkApi;

/// <summary>
/// The inputs of the DeleteCustomerInvitation operation.
/// </summary>
public sealed record DeleteCustomerInvitationRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
