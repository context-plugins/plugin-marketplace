namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkRestoreClassificationDepartment operation.
/// </summary>
public sealed record BulkRestoreClassificationDepartmentRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
