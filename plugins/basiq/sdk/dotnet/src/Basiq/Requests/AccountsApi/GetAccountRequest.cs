namespace Basiq.Requests.AccountsApi;

/// <summary>
/// The inputs of the GetAccount operation.
/// </summary>
public sealed record GetAccountRequest
{
    /// <summary>
    /// User identifier
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// Account identifier
    /// </summary>
    public required string AccountId { get; init; }

    /// <summary>
    /// Account filters; account.id, connection.id, institution.id, Only equals (eq) operation is currently supported.
    /// </summary>
    public string? Filter { get; init; }
}
