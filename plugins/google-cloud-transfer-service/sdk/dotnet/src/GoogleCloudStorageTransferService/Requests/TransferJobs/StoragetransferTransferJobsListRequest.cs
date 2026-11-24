namespace GoogleCloudStorageTransferService.Requests.TransferJobs;

/// <summary>
/// The inputs of the StoragetransferTransferJobsList operation.
/// </summary>
public sealed record StoragetransferTransferJobsListRequest
{
    /// <summary>
    /// Required. A list of query parameters specified as JSON text in the form of: ``` { "projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...], "dataBackend":"QUERY_REPLICATION_CONFIGS", "sourceBucket":"source-bucket-name", "sinkBucket":"sink-bucket-name", } ``` The JSON formatting in the example is for display only; provide the query parameters without spaces or line breaks. * `projectId` is required. * Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `jobNames` and `jobStatuses` are optional. Valid values are case-insensitive: * ENABLED * DISABLED * DELETED * Specify `"dataBackend":"QUERY_REPLICATION_CONFIGS"` to return a list of cross-bucket replication jobs. * Limit the results to jobs from a particular bucket with `sourceBucket` and/or to a particular bucket with `sinkBucket`.
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
}
