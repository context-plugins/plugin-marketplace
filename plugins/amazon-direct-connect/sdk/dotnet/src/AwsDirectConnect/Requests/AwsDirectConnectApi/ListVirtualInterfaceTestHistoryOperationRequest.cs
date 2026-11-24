using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the ListVirtualInterfaceTestHistory operation.
/// </summary>
public sealed record ListVirtualInterfaceTestHistoryOperationRequest
{
    public required XAmzTarget57 XAmzTarget { get; init; }
}
