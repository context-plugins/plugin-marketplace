namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkArchiveClassificationChartOfAccounts operation.
/// </summary>
public sealed record BulkArchiveClassificationChartOfAccountsRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
