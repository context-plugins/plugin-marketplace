using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Partner;

/// <summary>
/// The inputs of the GetPartnerUser operation.
/// </summary>
public sealed record GetPartnerUserRequest
{
    [MinLength(1)]
    public required string UserId { get; init; }

    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public string? OrganizationId { get; init; }
}
