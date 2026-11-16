namespace FinixApiReference.Requests.FeeProfiles;

/// <summary>
/// The inputs of the GetFeeProfile operation.
/// </summary>
public sealed record GetFeeProfileRequest
{
    /// <summary>
    /// The <c>Fee Profile</c> ID.
    /// </summary>
    public required string FeeProfileId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
