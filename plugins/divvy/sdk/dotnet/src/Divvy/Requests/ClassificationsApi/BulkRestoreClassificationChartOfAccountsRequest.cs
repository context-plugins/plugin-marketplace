namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkRestoreClassificationChartOfAccounts operation.
/// </summary>
public sealed record BulkRestoreClassificationChartOfAccountsRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
