using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the ConfirmCustomerAgreement operation.
/// </summary>
public sealed record ConfirmCustomerAgreementOperationRequest
{
    public required XAmzTarget10 XAmzTarget { get; init; }
}
