using Fillo.Models;

namespace Fillo.Requests.Integrations;

/// <summary>
/// The inputs of the RemoveIntegrationAccount operation.
/// </summary>
public sealed record RemoveIntegrationAccountRequest
{
    /// <summary>
    /// An integration account id from the connections listing.
    /// </summary>
    public required string Id { get; init; }

    public required ConfirmTarget Body { get; init; }
}
