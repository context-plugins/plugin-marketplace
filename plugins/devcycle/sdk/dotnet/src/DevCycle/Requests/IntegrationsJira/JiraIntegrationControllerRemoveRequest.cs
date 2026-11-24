namespace DevCycle.Requests.IntegrationsJira;

/// <summary>
/// The inputs of the JiraIntegrationControllerRemove operation.
/// </summary>
public sealed record JiraIntegrationControllerRemoveRequest
{
    public required string Token { get; init; }
}
