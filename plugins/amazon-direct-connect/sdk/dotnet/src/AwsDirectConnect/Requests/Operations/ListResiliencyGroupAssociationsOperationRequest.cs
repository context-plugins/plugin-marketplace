using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the ListResiliencyGroupAssociations operation.
/// </summary>
public sealed record ListResiliencyGroupAssociationsOperationRequest
{
    public required XAmzTarget12AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
