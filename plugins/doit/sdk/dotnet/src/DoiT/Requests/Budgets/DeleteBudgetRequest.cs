namespace DoiT.Requests.Budgets;

/// <summary>
/// The inputs of the DeleteBudget operation.
/// </summary>
public sealed record DeleteBudgetRequest
{
    /// <summary>
    /// Budget ID
    /// </summary>
    public required string Id { get; init; }
}
