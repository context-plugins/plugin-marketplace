using FinixApiReference.Models;

namespace FinixApiReference.Requests.SettlementsApi;

/// <summary>
/// The inputs of the RemoveSettlementTransfers operation.
/// </summary>
public sealed record RemoveSettlementTransfersRequest
{
    /// <summary>
    /// The ID of <c>Settlement</c>.
    /// </summary>
    public required string SettlementId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    /// <summary>
    /// The <c>Transfer</c> IDs to be removed from the <c>Settlement</c>.
    /// </summary>
    public required DeleteSettlementTransfers Body { get; init; }
}
