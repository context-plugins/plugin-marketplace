using FinixApiReference.Models;

namespace FinixApiReference.Requests.SettlementsApi;

/// <summary>
/// The inputs of the Closesettlements operation.
/// </summary>
public sealed record ClosesettlementsRequest
{
    /// <summary>
    /// The ID of the <c>Settlement</c>.
    /// </summary>
    public required string SettlementId { get; init; }

    public required CloseSettlement Body { get; init; }
}
