using Bill.Models;

namespace Bill.Requests.Mfa;

/// <summary>
/// The inputs of the Setup operation.
/// </summary>
public sealed record SetupRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required MfaSetupRequestDto Body { get; init; }
}
