namespace FinixApiReference.Requests.Devices;

/// <summary>
/// The inputs of the GetDeviceConnection operation.
/// </summary>
public sealed record GetDeviceConnectionRequest
{
    /// <summary>
    /// The <c>Device</c> you wish to check the connection status of.
    /// </summary>
    public required string DeviceIdConnection { get; init; }

    /// <summary>
    /// Specifies whether the connection information should be included.
    /// </summary>
    public required bool IncludeConnection { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
