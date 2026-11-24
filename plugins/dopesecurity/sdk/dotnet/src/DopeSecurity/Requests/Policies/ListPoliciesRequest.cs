using DopeSecurity.Models.Enums;

namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the ListPolicies operation.
/// </summary>
public sealed record ListPoliciesRequest
{
    /// <summary>
    /// An optional pagination param that states the number of records requested from the <b>start</b> of the <c>cursor</c>. The default value is <b>50</b>.
    /// </summary>
    public int First { get; init; } = 50;

    /// <summary>
    /// An optional pagination cursor. Pass the <c>endCursor</c> from the previous response's <c>pageInfo</c> to fetch the next page. Check <c>hasNextPage</c> in the previous response's <c>pageInfo</c> to determine whether more records are available.
    /// </summary>
    public string? After { get; init; }

    /// <summary>
    /// Sort order for policy names. Defaults to <c>asc</c>.
    /// </summary>
    public Order Order { get; init; } = Order.Asc;
}
