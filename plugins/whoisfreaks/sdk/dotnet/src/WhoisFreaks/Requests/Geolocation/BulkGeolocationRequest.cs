using WhoisFreaks.Models;

namespace WhoisFreaks.Requests.Geolocation;

/// <summary>
/// The inputs of the BulkGeolocation operation.
/// </summary>
public sealed record BulkGeolocationRequest
{
    public required V10GeolocationRequest Body { get; init; }
}
