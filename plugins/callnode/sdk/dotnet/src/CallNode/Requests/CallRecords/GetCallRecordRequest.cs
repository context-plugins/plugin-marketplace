namespace CallNode.Requests.CallRecords;

/// <summary>
/// The inputs of the GetCallRecord operation.
/// </summary>
public sealed record GetCallRecordRequest
{
    public required string CallId { get; init; }
}
