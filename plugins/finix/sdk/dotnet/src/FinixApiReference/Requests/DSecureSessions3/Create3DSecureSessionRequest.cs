using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.DSecureSessions3;

/// <summary>
/// The inputs of the Create3DSecureSession operation.
/// </summary>
public sealed record Create3DSecureSessionRequest
{
    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required DSecureSessionsRequest3 Body { get; init; }
}
