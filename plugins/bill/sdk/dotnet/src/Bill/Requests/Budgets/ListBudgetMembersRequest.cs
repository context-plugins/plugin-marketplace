using System.ComponentModel.DataAnnotations;
using Bill.Core.Validation.Attributes;

namespace Bill.Requests.Budgets;

/// <summary>
/// The inputs of the ListBudgetMembers operation.
/// </summary>
public sealed record ListBudgetMembersRequest
{
    [MinLength(1)]
    public required string BudgetId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public long? Max { get; init; }

    public string? NextPage { get; init; }

    public string? PrevPage { get; init; }

    public string? Sort { get; init; }

    public string? Filters { get; init; }

    public string? ApiToken { get; init; }
}
