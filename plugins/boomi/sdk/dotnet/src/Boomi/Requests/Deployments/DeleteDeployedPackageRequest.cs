namespace Boomi.Requests.Deployments;

/// <summary>
/// The inputs of the DeleteDeployedPackage operation.
/// </summary>
public sealed record DeleteDeployedPackageRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }
}
