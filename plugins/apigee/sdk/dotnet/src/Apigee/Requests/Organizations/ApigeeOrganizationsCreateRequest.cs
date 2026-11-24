using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsCreateRequest
{
    /// <summary>
    /// Required. Name of the Google Cloud project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: <c>projects/</c>
    /// </summary>
    public string? Parent { get; init; }

    public required GoogleCloudApigeeV1Organization Body { get; init; }
}
