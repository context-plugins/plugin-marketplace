namespace Bill.Requests.RiskVerifications;

/// <summary>
/// The inputs of the GetRiskVerifications operation.
/// </summary>
public sealed record GetRiskVerificationsRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
