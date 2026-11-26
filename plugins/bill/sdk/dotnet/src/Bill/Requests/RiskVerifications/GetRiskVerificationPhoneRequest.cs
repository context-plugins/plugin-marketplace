namespace Bill.Requests.RiskVerifications;

/// <summary>
/// The inputs of the GetRiskVerificationPhone operation.
/// </summary>
public sealed record GetRiskVerificationPhoneRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
