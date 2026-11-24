using DoiT.Models;

namespace DoiT.Requests.Alerts;

/// <summary>
/// The inputs of the CreateAlert operation.
/// </summary>
public sealed record CreateAlertRequest
{
    public required AlertRequest Body { get; init; }
}
