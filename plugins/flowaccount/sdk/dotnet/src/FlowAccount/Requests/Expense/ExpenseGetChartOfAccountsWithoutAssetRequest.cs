namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseGetChartOfAccountsWithoutAsset operation.
/// </summary>
public sealed record ExpenseGetChartOfAccountsWithoutAssetRequest
{
    public required string Culture { get; init; }
}
