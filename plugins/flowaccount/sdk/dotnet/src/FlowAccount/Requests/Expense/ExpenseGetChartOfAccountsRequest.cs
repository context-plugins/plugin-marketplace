namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseGetChartOfAccounts operation.
/// </summary>
public sealed record ExpenseGetChartOfAccountsRequest
{
    public required string Culture { get; init; }
}
