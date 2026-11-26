using Bill.Models;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the CreateClassificationChartOfAccounts operation.
/// </summary>
public sealed record CreateClassificationChartOfAccountsRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateClassificationChartOfAccountsRequestDto Body { get; init; }
}
