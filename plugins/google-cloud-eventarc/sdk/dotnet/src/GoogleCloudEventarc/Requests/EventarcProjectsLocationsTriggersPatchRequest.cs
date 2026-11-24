using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsTriggersPatch operation.
/// </summary>
public sealed record EventarcProjectsLocationsTriggersPatchRequest
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

    /// <summary>
    /// If set to true, and the trigger is not found, a new trigger will be created. In this situation, <c>update_mask</c> is ignored.
    /// </summary>
    public bool? AllowMissing { get; init; }

    /// <summary>
    /// The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".
    /// </summary>
    public string? UpdateMask { get; init; }

    /// <summary>
    /// Optional. If set, validate the request and preview the review, but do not post it.
    /// </summary>
    public bool? ValidateOnly { get; init; }

    public required Trigger Body { get; init; }
}
