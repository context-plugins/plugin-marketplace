using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.ResiliencyGroupApi;

/// <summary>
/// The inputs of the ListResiliencyGroups operation.
/// </summary>
public sealed record ListResiliencyGroupsOperationRequest
{
    public required XAmzTarget3AwsDirectConnectResiliencyGroupApi XAmzTarget { get; init; }
}
