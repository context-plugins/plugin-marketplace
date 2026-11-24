namespace DoiT.Requests.Budgets;

/// <summary>
/// The inputs of the GetBudget operation.
/// </summary>
public sealed record GetBudgetRequest
{
    /// <summary>
    /// Budget ID
    /// </summary>
    public required string Id { get; init; }
}
