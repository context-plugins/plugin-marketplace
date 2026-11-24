namespace DevCycle.Requests.IntegrationsJira;

/// <summary>
/// The inputs of the JiraIntegrationControllerRemoveOrganizationConnection operation.
/// </summary>
public sealed record JiraIntegrationControllerRemoveOrganizationConnectionRequest
{
    public required string Token { get; init; }
}
