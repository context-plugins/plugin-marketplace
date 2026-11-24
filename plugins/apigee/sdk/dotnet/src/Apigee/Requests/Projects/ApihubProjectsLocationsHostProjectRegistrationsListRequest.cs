namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsHostProjectRegistrationsList operation.
/// </summary>
public sealed record ApihubProjectsLocationsHostProjectRegistrationsListRequest
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
    /// Optional. An expression that filters the list of HostProjectRegistrations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. All standard operators as documented at https://google.aip.dev/160 are supported. The following fields in the <c>HostProjectRegistration</c> are eligible for filtering: * <c>name</c> - The name of the HostProjectRegistration. * <c>create_time</c> - The time at which the HostProjectRegistration was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * <c>gcp_project</c> - The Google cloud project associated with the HostProjectRegistration.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Hint for how to order the results.
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// Optional. The maximum number of host project registrations to return. The service may return fewer than this value. If unspecified, at most 50 host project registrations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListHostProjectRegistrations</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to <c>ListHostProjectRegistrations</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
