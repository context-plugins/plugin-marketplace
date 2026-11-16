using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.Devices;

/// <summary>
/// The inputs of the CreateMerchantDevice operation.
/// </summary>
public sealed record CreateMerchantDeviceRequest
{
    /// <summary>
    /// The ID of the <c>Merchant</c> the <c>Device</c> will be created under.
    /// </summary>
    public required string MerchantId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required MerchantsDevicesRequest Body { get; init; }
}
