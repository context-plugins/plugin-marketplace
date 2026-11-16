namespace FinixApiReference.Requests.SettlementQueueEntries;

/// <summary>
/// The inputs of the GetSettlementQueueEntry operation.
/// </summary>
public sealed record GetSettlementQueueEntryRequest
{
    /// <summary>
    /// The ID of the <c>Settlement Queue Entry</c>.
    /// </summary>
    public required string SettlementQueueEntryId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
