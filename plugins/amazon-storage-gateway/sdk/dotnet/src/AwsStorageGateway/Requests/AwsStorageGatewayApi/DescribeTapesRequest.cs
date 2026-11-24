using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeTapes operation.
/// </summary>
public sealed record DescribeTapesRequest
{
    public required XAmzTarget42 XAmzTarget { get; init; }
}
