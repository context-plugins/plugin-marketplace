using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CreateTapeWithBarcode operation.
/// </summary>
public sealed record CreateTapeWithBarcodeRequest
{
    public required XAmzTarget40 XAmzTarget { get; init; }
}
