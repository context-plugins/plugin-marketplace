using DoiT.Models;

namespace DoiT.Requests.Alerts;

/// <summary>
/// The inputs of the UpdateAlert operation.
/// </summary>
public sealed record UpdateAlertRequest
{
    /// <summary>
    /// Alert ID
    /// </summary>
    public required string Id { get; init; }

    public required AlertUpdateRequest Body { get; init; }
}
