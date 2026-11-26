using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Partner;

/// <summary>
/// The inputs of the RestorePartnerUser operation.
/// </summary>
public sealed record RestorePartnerUserRequest
{
    [MinLength(1)]
    public required string UserId { get; init; }

    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public string? OrganizationId { get; init; }
}
