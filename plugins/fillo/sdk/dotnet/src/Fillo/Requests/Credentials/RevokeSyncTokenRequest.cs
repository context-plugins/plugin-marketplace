using Fillo.Models;

namespace Fillo.Requests.Credentials;

/// <summary>
/// The inputs of the RevokeSyncToken operation.
/// </summary>
public sealed record RevokeSyncTokenRequest
{
    /// <summary>
    /// A sync token id from the sync-token listing.
    /// </summary>
    public required string Id { get; init; }

    public required ConfirmTarget Body { get; init; }
}
