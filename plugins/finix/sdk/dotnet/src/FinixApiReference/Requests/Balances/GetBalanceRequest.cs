namespace FinixApiReference.Requests.Balances;

/// <summary>
/// The inputs of the GetBalance operation.
/// </summary>
public sealed record GetBalanceRequest
{
    /// <summary>
    /// The ID of the <c>Balance</c>.
    /// </summary>
    public required string BalanceId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
