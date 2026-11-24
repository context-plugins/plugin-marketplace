using ZeroBounce.Models;

namespace ZeroBounce.Requests;

/// <summary>
/// The inputs of the Validate operation.
/// </summary>
public sealed record ValidateRequest
{
    public required ValidateEmailRequest Body { get; init; }
}
