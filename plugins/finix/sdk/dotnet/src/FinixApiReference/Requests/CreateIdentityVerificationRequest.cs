namespace FinixApiReference.Requests;

/// <summary>
/// The inputs of the CreateIdentityVerification operation.
/// </summary>
public sealed record CreateIdentityVerificationRequest
{
    /// <summary>
    /// The <c>Identity</c> ID for the <c>Merchant</c> you wish to verify.
    /// </summary>
    public required string IdentityId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required object Body { get; init; }
}
