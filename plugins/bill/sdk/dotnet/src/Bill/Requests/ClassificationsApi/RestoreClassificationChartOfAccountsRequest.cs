using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the RestoreClassificationChartOfAccounts operation.
/// </summary>
public sealed record RestoreClassificationChartOfAccountsRequest
{
    [MinLength(1)]
    public required string Id { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
