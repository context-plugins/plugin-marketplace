using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the ConfirmCustomerAgreement2 operation.
/// </summary>
public sealed record ConfirmCustomerAgreement2Request
{
    public required XAmzTarget6AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
