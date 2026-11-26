namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkRestoreClassificationEmployee operation.
/// </summary>
public sealed record BulkRestoreClassificationEmployeeRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
