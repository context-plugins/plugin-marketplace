using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Partner;

/// <summary>
/// The inputs of the ArchivePartnerUser operation.
/// </summary>
public sealed record ArchivePartnerUserRequest
{
    [MinLength(1)]
    public required string UserId { get; init; }

    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public string? OrganizationId { get; init; }
}
