using GoogleCloudDatastream.Models;

namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsPrivateConnectionsCreate operation.
/// </summary>
public sealed record DatastreamProjectsLocationsPrivateConnectionsCreateRequest
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
    /// Optional. If set to true, will skip validations.
    /// </summary>
    public bool? Force { get; init; }

    /// <summary>
    /// Required. The private connectivity identifier.
    /// </summary>
    public string? PrivateConnectionId { get; init; }

    /// <summary>
    /// Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    /// </summary>
    public string? RequestId { get; init; }

    /// <summary>
    /// Optional. When supplied with PSC Interface config, will get/create the tenant project required for the customer to allow list and won't actually create the private connection.
    /// </summary>
    public bool? ValidateOnly { get; init; }

    public required PrivateConnection Body { get; init; }
}
