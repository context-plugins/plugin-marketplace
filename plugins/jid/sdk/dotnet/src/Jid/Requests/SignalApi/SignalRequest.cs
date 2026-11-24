namespace Jid.Requests.SignalApi;

/// <summary>
/// The inputs of the Signal operation.
/// </summary>
public sealed record SignalRequest
{
    /// <summary>
    /// Browser IANA time zone
    /// </summary>
    public string? Tz { get; init; }
}
