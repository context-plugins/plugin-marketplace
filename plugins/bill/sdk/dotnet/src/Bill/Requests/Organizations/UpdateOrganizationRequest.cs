using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Organizations;

/// <summary>
/// The inputs of the UpdateOrganization operation.
/// </summary>
public sealed record UpdateOrganizationRequest
{
    [MinLength(1)]
    public required string OrganizationId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required OrganizationUpdateRequestDto Body { get; init; }
}
