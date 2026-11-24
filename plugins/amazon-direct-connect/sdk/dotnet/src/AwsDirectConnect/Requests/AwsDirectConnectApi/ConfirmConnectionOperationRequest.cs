using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the ConfirmConnection operation.
/// </summary>
public sealed record ConfirmConnectionOperationRequest
{
    public required XAmzTarget9 XAmzTarget { get; init; }
}
