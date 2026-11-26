using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Organizations;

/// <summary>
/// The inputs of the GetOrganization operation.
/// </summary>
public sealed record GetOrganizationRequest
{
    [MinLength(1)]
    public required string OrganizationId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
