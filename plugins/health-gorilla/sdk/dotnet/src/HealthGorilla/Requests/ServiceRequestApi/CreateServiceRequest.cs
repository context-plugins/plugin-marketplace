using HealthGorilla.Models;

namespace HealthGorilla.Requests.ServiceRequestApi;

/// <summary>
/// The inputs of the CreateServiceRequest operation.
/// </summary>
public sealed record CreateServiceRequest
{
    public required ServiceRequest Body { get; init; }
}
