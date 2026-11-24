using System;
using Givebutter.Models.Enums;

namespace Givebutter.Requests.Transactions;

/// <summary>
/// The inputs of the TransactionsIndex operation.
/// </summary>
public sealed record TransactionsIndexRequest
{
    public DateTimeOffset? TransactedAfter { get; init; }

    public DateTimeOffset? TransactedBefore { get; init; }

    public DateTimeOffset? CreatedAfter { get; init; }

    public DateTimeOffset? CreatedBefore { get; init; }

    public DateTimeOffset? UpdatedAfter { get; init; }

    public DateTimeOffset? UpdatedBefore { get; init; }

    public DateTimeOffset? CheckDepositedAfter { get; init; }

    public DateTimeOffset? CheckDepositedBefore { get; init; }

    public string? Contacts { get; init; }

    public string? Method { get; init; }

    public ScopeGivebutterApiDocumentationTransactionsApi? Scope { get; init; }

    public SortByGivebutterApiDocumentationTransactionsApi? SortBy { get; init; }

    public SortByDescGivebutterApiDocumentationTransactionsApi? SortByDesc { get; init; }
}
