namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsRuntimeProjectAttachmentsList operation.
/// </summary>
public sealed record ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest
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
    /// Optional. An expression that filters the list of RuntimeProjectAttachments. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. All standard operators as documented at https://google.aip.dev/160 are supported. The following fields in the <c>RuntimeProjectAttachment</c> are eligible for filtering: * <c>name</c> - The name of the RuntimeProjectAttachment. * <c>create_time</c> - The time at which the RuntimeProjectAttachment was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * <c>runtime_project</c> - The Google cloud project associated with the RuntimeProjectAttachment.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Hint for how to order the results.
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// Optional. The maximum number of runtime project attachments to return. The service may return fewer than this value. If unspecified, at most 50 runtime project attachments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListRuntimeProjectAttachments</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to <c>ListRuntimeProjectAttachments</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
