using Divvy.Models;

namespace Divvy.Requests.Partner;

/// <summary>
/// The inputs of the CreatePartnerUser operation.
/// </summary>
public sealed record CreatePartnerUserRequest
{
    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public string? OrganizationId { get; init; }

    public required PartnerUserCreateRequestDto Body { get; init; }
}
