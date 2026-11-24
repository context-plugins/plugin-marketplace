using DevCycle.Models;

namespace DevCycle.Requests.IntegrationsDynatrace;

/// <summary>
/// The inputs of the DynatraceIntegrationControllerCreateIntegration operation.
/// </summary>
public sealed record DynatraceIntegrationControllerCreateIntegrationRequest
{
    public required CreateDynatraceIntegrationDto Body { get; init; }
}
