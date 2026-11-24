using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the NotifyWhenUploaded operation.
/// </summary>
public sealed record NotifyWhenUploadedRequest
{
    public required XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi XAmzTarget { get; init; }
}
