using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.ServiceIntegrations;

/// <summary>
/// The inputs of the UpdateServiceIntegration operation.
/// </summary>
public sealed record UpdateServiceIntegrationRequest
{
    public ServiceIntegrationsRequest? Body { get; init; }
}
