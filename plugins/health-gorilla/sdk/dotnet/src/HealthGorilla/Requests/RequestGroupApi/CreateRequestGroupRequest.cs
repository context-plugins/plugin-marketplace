using HealthGorilla.Models;

namespace HealthGorilla.Requests.RequestGroupApi;

/// <summary>
/// The inputs of the CreateRequestGroup operation.
/// </summary>
public sealed record CreateRequestGroupRequest
{
    public required RequestGroup Body { get; init; }
}
