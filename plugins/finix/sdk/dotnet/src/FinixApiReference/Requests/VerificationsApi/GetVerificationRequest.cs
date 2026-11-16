namespace FinixApiReference.Requests.VerificationsApi;

/// <summary>
/// The inputs of the GetVerification operation.
/// </summary>
public sealed record GetVerificationRequest
{
    /// <summary>
    /// The <c>Verification</c> object ID.
    /// </summary>
    public required string VerificationId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
