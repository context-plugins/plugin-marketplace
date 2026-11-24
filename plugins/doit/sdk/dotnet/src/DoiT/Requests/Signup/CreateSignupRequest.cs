using System.ComponentModel.DataAnnotations;
using DoiT.Models;

namespace DoiT.Requests.Signup;

/// <summary>
/// The inputs of the CreateSignupRequest operation.
/// </summary>
public sealed record CreateSignupRequest
{
    /// <summary>
    /// Caller-chosen key (1-256 characters) that makes retries safe; the same key returns the same request.
    /// </summary>
    [StringLength(256, MinimumLength = 1)]
    public required string IdempotencyKey { get; init; }

    public required SignupRequestCreate Body { get; init; }
}
