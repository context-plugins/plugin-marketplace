namespace Fillo.Requests.WorkspaceApi;

/// <summary>
/// The inputs of the EnableIdentityVerification operation.
/// </summary>
public sealed record EnableIdentityVerificationRequest
{
    /// <summary>
    /// No input. Any key is a 400.
    /// </summary>
    public object? Body { get; init; }
}
