namespace FinixApiReference.Requests.DSecureSessions3;

/// <summary>
/// The inputs of the Get3DSecureSession operation.
/// </summary>
public sealed record Get3DSecureSessionRequest
{
    /// <summary>
    /// ID of the <c>3D Secure Session</c> to fetch.
    /// </summary>
    public required string DSecureSessionId3 { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
