using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the UpdateConnectionsBillingMode operation.
/// </summary>
public sealed record UpdateConnectionsBillingModeOperationRequest
{
    public required XAmzTarget14AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
