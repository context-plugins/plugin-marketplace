using Boomi.Models;

namespace Boomi.Requests.Deployments;

/// <summary>
/// The inputs of the CreateDeployedPackage operation.
/// </summary>
public sealed record CreateDeployedPackageRequest
{
    public required DeployedPackageInput Body { get; init; }
}
