using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.FeeProfiles;

/// <summary>
/// The inputs of the CreateFeeProfile operation.
/// </summary>
public sealed record CreateFeeProfileRequest
{
    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required FeeProfilesRequest Body { get; init; }
}
