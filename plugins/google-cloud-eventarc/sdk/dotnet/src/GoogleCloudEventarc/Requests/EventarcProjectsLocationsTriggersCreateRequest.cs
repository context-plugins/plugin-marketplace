using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsTriggersCreate operation.
/// </summary>
public sealed record EventarcProjectsLocationsTriggersCreateRequest
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
    /// Required. The user-provided ID to be assigned to the trigger.
    /// </summary>
    public string? TriggerId { get; init; }

    /// <summary>
    /// Optional. If set, validate the request and preview the review, but do not post it.
    /// </summary>
    public bool? ValidateOnly { get; init; }

    public required Trigger Body { get; init; }
}
