namespace DoiT.Requests.Alerts;

/// <summary>
/// The inputs of the GetAlert operation.
/// </summary>
public sealed record GetAlertRequest
{
    /// <summary>
    /// Alert ID
    /// </summary>
    public required string Id { get; init; }
}
