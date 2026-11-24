namespace Curlec.Requests.XFundAccounts;

/// <summary>
/// The inputs of the ListFundAccounts operation.
/// </summary>
public sealed record ListFundAccountsRequest
{
    /// <summary>
    /// Filter by contact ID to list fund accounts linked to that contact.
    /// </summary>
    public string? ContactId { get; init; }

    /// <summary>
    /// Filter by fund account type: <c>bank_account</c>, <c>vpa</c>, <c>card</c>, or <c>wallet</c>.
    /// </summary>
    public string? AccountType { get; init; }

    /// <summary>
    /// Number of fund accounts to return. Default: 10. Maximum: 100.
    /// </summary>
    public int Count { get; init; } = 10;

    /// <summary>
    /// Number of fund accounts to skip. Use for pagination. Default: 0.
    /// </summary>
    public int Skip { get; init; } = 0;
}
