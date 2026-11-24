using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsPipelinesSetIamPolicy operation.
/// </summary>
public sealed record EventarcProjectsLocationsPipelinesSetIamPolicyRequest
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
    /// Resource name segment (pipelinesId).
    /// </summary>
    public required string PipelinesId { get; init; }

    public required SetIamPolicyRequest Body { get; init; }
}
