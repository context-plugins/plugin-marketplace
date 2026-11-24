using AwsXRay.Models;

namespace AwsXRay.Requests.ServiceGraph;

/// <summary>
/// The inputs of the GetServiceGraph operation.
/// </summary>
public sealed record GetServiceGraphRequest
{
    public ServiceGraphRequest? Body { get; init; }
}
