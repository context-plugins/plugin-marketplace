namespace FinixApiReference.Requests.Balances;

/// <summary>
/// The inputs of the GetBalanceEntry operation.
/// </summary>
public sealed record GetBalanceEntryRequest
{
    /// <summary>
    /// The ID of the <c>Balance Entry</c>.
    /// </summary>
    public required string BalanceEntryId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
