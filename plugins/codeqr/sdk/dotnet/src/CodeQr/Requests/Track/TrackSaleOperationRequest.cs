using CodeQr.Models;

namespace CodeQr.Requests.Track;

/// <summary>
/// The inputs of the TrackSale operation.
/// </summary>
public sealed record TrackSaleOperationRequest
{
    public TrackSaleRequest? Body { get; init; }
}
