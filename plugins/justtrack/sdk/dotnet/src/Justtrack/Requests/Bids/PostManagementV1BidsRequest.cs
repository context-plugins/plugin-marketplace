using Justtrack.Models;

namespace Justtrack.Requests.Bids;

/// <summary>
/// The inputs of the PostManagementV1Bids operation.
/// </summary>
public sealed record PostManagementV1BidsRequest
{
    public ListBidsRequest? Body { get; init; }
}
