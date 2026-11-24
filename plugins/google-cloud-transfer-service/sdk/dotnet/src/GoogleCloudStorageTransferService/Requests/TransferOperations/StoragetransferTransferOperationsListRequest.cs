namespace GoogleCloudStorageTransferService.Requests.TransferOperations;

/// <summary>
/// The inputs of the StoragetransferTransferOperationsList operation.
/// </summary>
public sealed record StoragetransferTransferOperationsListRequest
{
    /// <summary>
    /// Required. A list of query parameters specified as JSON text in the form of: <c>{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobNamePattern": "job_name_pattern", "operationNames":["opid1","opid2",...], "operationNamePattern": "operation_name_pattern", "minCreationTime": "min_creation_time", "maxCreationTime": "max_creation_time", "transferStatuses":["status1","status2",...]}</c> Since <c>jobNames</c>, <c>operationNames</c>, and <c>transferStatuses</c> support multiple values, they must be specified with array notation. <c>projectId</c> is the only argument that is required. If specified, <c>jobNamePattern</c> and <c>operationNamePattern</c> must match the full job or operation name respectively. '*' is a wildcard matching 0 or more characters. <c>minCreationTime</c> and <c>maxCreationTime</c> should be timestamps encoded as a string in the <see href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</see> format. The valid values for <c>transferStatuses</c> are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
    /// </summary>
    public required string Filter { get; init; }

    /// <summary>
    /// The list page size. The max allowed value is 256.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// The list page token.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// When set to <c>true</c>, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be <c>true</c> when reading across collections. For example, when <c>parent</c> is set to <c>"projects/example/locations/-"</c>. This field is not supported by default and will result in an <c>UNIMPLEMENTED</c> error if set unless explicitly documented otherwise in service or product specific documentation.
    /// </summary>
    public bool? ReturnPartialSuccess { get; init; }
}
