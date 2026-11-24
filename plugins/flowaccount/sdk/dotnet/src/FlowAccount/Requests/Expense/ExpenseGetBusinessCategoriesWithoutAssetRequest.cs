namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseGetBusinessCategoriesWithoutAsset operation.
/// </summary>
public sealed record ExpenseGetBusinessCategoriesWithoutAssetRequest
{
    public required string Culture { get; init; }
}
