using Divvy.Models;

namespace Divvy.Requests.Mfa;

/// <summary>
/// The inputs of the Validate operation.
/// </summary>
public sealed record ValidateRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required MfaSetupValidateRequestDto Body { get; init; }
}
