namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkArchiveClassificationEmployee operation.
/// </summary>
public sealed record BulkArchiveClassificationEmployeeRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
