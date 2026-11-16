namespace FinixApiReference.Requests.SettlementsApi;

/// <summary>
/// The inputs of the GetSettlement operation.
/// </summary>
public sealed record GetSettlementRequest
{
    /// <summary>
    /// The ID of the <c>Settlement</c>.
    /// </summary>
    public required string SettlementId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
