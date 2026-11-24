namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseIndex operation.
/// </summary>
public sealed record ExpenseIndexRequest
{
    public required string Culture { get; init; }

    public string? SortBy { get; init; }

    public string? CurrentPage { get; init; }

    public string? PageSize { get; init; }

    public string? Filter { get; init; }

    public string? SearchString { get; init; }

    public string? CustomDocumentModels { get; init; }

    public string? Range { get; init; }

    public string? Month { get; init; }

    public string? Year { get; init; }

    public string? StartDate { get; init; }

    public string? EndDate { get; init; }
}
