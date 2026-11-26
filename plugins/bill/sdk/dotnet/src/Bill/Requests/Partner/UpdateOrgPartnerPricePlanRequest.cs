using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Partner;

/// <summary>
/// The inputs of the UpdateOrgPartnerPricePlan operation.
/// </summary>
public sealed record UpdateOrgPartnerPricePlanRequest
{
    [MinLength(1)]
    public required string OrganizationId { get; init; }

    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public required UpdateOrgPricePlanRequest Body { get; init; }
}
