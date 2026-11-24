namespace Divvy.Requests.RiskVerifications;

/// <summary>
/// The inputs of the InitiateRiskVerifications operation.
/// </summary>
public sealed record InitiateRiskVerificationsRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
