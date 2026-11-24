using Boomi.Models;

namespace Boomi.Requests.Deployments;

/// <summary>
/// The inputs of the QueryDeployedPackages operation.
/// </summary>
public sealed record QueryDeployedPackagesRequest
{
    public required QueryRequest Body { get; init; }
}
