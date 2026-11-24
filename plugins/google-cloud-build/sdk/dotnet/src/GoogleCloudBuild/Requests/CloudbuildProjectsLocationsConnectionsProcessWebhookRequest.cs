using GoogleCloudBuild.Models;

namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsProcessWebhook operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsProcessWebhookRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// Arbitrary additional key to find the matching repository for a webhook event if needed.
    /// </summary>
    public string? WebhookKey { get; init; }

    public required HttpBody Body { get; init; }
}
