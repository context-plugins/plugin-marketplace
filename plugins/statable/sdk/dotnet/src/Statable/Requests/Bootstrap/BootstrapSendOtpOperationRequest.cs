using Statable.Models;

namespace Statable.Requests.Bootstrap;

/// <summary>
/// The inputs of the BootstrapSendOtp operation.
/// </summary>
public sealed record BootstrapSendOtpOperationRequest
{
    public required BootstrapSendOtpRequest Body { get; init; }
}
