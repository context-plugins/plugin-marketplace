namespace DoiT.Requests.Alerts;

/// <summary>
/// The inputs of the DeleteAlert operation.
/// </summary>
public sealed record DeleteAlertRequest
{
    /// <summary>
    /// Alert ID
    /// </summary>
    public required string Id { get; init; }
}
