namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkArchiveClassificationDepartment operation.
/// </summary>
public sealed record BulkArchiveClassificationDepartmentRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
