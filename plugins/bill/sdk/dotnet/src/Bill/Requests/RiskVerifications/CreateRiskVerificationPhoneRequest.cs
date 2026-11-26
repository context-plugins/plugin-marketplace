using Bill.Models;

namespace Bill.Requests.RiskVerifications;

/// <summary>
/// The inputs of the CreateRiskVerificationPhone operation.
/// </summary>
public sealed record CreateRiskVerificationPhoneRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required PhoneVerificationRequestDto Body { get; init; }
}
