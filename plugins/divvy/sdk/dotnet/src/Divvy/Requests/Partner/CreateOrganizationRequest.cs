using Divvy.Models;

namespace Divvy.Requests.Partner;

/// <summary>
/// The inputs of the CreateOrganization operation.
/// </summary>
public sealed record CreateOrganizationRequest
{
    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public required OrganizationCreateRequestDto Body { get; init; }
}
