namespace Buildkite.Requests.Organizations;

/// <summary>
/// The inputs of the GetOrganization operation.
/// </summary>
public sealed record GetOrganizationRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }
}
