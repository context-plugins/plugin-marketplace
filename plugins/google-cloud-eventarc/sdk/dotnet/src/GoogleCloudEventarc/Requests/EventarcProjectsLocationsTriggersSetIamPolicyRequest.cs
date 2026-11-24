using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsTriggersSetIamPolicy operation.
/// </summary>
public sealed record EventarcProjectsLocationsTriggersSetIamPolicyRequest
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
    /// Resource name segment (triggersId).
    /// </summary>
    public required string TriggersId { get; init; }

    public required SetIamPolicyRequest Body { get; init; }
}
