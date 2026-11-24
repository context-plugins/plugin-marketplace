namespace WhoisFreaks.Requests.Geolocation;

/// <summary>
/// The inputs of the GeolocationInvoke operation.
/// </summary>
public sealed record GeolocationRequest
{
    public required string Ip { get; init; }
}
