using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Partner;

/// <summary>
/// The inputs of the UpdatePartnerUser operation.
/// </summary>
public sealed record UpdatePartnerUserRequest
{
    [MinLength(1)]
    public required string UserId { get; init; }

    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public string? OrganizationId { get; init; }

    public required PartnerUserUpdateRequestDto Body { get; init; }
}
