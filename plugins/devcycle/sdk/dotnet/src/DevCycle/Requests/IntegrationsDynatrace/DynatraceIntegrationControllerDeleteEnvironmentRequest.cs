namespace DevCycle.Requests.IntegrationsDynatrace;

/// <summary>
/// The inputs of the DynatraceIntegrationControllerDeleteEnvironment operation.
/// </summary>
public sealed record DynatraceIntegrationControllerDeleteEnvironmentRequest
{
    public required string DynatraceEnvironmentId { get; init; }
}
