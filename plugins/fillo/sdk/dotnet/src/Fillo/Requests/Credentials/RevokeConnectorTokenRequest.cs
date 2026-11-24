using Fillo.Models;

namespace Fillo.Requests.Credentials;

/// <summary>
/// The inputs of the RevokeConnectorToken operation.
/// </summary>
public sealed record RevokeConnectorTokenRequest
{
    /// <summary>
    /// A token id from the connector-token listing.
    /// </summary>
    public required string Id { get; init; }

    public required ConfirmTarget Body { get; init; }
}
