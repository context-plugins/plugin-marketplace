using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeSmbSettings operation.
/// </summary>
public sealed record DescribeSmbSettingsRequest
{
    public required XAmzTarget73 XAmzTarget { get; init; }
}
