using Statable.Models;

namespace Statable.Requests.Bootstrap;

/// <summary>
/// The inputs of the BootstrapVerifyOtp operation.
/// </summary>
public sealed record BootstrapVerifyOtpOperationRequest
{
    public required BootstrapVerifyOtpRequest Body { get; init; }
}
