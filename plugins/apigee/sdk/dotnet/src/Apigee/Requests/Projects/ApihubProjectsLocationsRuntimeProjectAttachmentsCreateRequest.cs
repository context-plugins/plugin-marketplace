using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsRuntimeProjectAttachmentsCreate operation.
/// </summary>
public sealed record ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest
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
    /// Required. The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. The ID must be the same as the project ID of the Google cloud project specified in the runtime_project_attachment.runtime_project field.
    /// </summary>
    public string? RuntimeProjectAttachmentId { get; init; }

    public required GoogleCloudApihubV1RuntimeProjectAttachment Body { get; init; }
}
