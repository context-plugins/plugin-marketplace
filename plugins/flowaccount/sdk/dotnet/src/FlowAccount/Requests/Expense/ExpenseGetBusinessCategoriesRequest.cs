namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseGetBusinessCategories operation.
/// </summary>
public sealed record ExpenseGetBusinessCategoriesRequest
{
    public required string Culture { get; init; }
}
