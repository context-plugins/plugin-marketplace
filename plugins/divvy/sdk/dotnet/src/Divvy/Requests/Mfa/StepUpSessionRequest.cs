using Divvy.Models;

namespace Divvy.Requests.Mfa;

/// <summary>
/// The inputs of the StepUpSession operation.
/// </summary>
public sealed record StepUpSessionRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required MfaStepUpRequestDto Body { get; init; }
}
