namespace DevCycle.Requests.IntegrationsJira;

/// <summary>
/// The inputs of the JiraIntegrationControllerRemoveProjectConnection operation.
/// </summary>
public sealed record JiraIntegrationControllerRemoveProjectConnectionRequest
{
    public required string Token { get; init; }
}
