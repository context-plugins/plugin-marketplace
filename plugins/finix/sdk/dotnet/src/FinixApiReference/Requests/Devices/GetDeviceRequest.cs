namespace FinixApiReference.Requests.Devices;

/// <summary>
/// The inputs of the GetDevice operation.
/// </summary>
public sealed record GetDeviceRequest
{
    /// <summary>
    /// The <c>Device</c> ID.
    /// </summary>
    public required string DeviceId { get; init; }

    /// <summary>
    /// Specifies whether the connection information should be included.
    /// </summary>
    public bool? IncludeConnection { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
