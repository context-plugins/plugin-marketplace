namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSpacesList operation.
/// </summary>
public sealed record ApigeeOrganizationsSpacesListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. The maximum number of spaces to return. The service may return fewer than this value. If unspecified, at most 50 spaces will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListSpaces</c> call. Provide this to retrieve the subsequent page. When paginating, all parameters must match the original call.
    /// </summary>
    public string? PageToken { get; init; }
}
