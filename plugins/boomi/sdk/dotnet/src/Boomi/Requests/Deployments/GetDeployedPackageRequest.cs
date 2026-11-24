namespace Boomi.Requests.Deployments;

/// <summary>
/// The inputs of the GetDeployedPackage operation.
/// </summary>
public sealed record GetDeployedPackageRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }
}
