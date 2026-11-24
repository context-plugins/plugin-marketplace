namespace Basiq.Requests.AccountsApi;

/// <summary>
/// The inputs of the GetAccounts operation.
/// </summary>
public sealed record GetAccountsRequest
{
    /// <summary>
    /// User identifier
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// Account filters: account.id, connection.id, institution.id. Only the equals (eq) operation is currently supported.
    /// </summary>
    public string? Filter { get; init; }
}
