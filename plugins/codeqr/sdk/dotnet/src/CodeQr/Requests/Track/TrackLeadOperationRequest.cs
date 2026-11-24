using CodeQr.Models;

namespace CodeQr.Requests.Track;

/// <summary>
/// The inputs of the TrackLead operation.
/// </summary>
public sealed record TrackLeadOperationRequest
{
    public TrackLeadRequest? Body { get; init; }
}
