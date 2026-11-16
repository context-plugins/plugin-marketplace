using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.MerchantsApi;

/// <summary>
/// The inputs of the CreateMerchant operation.
/// </summary>
public sealed record CreateMerchantRequest
{
    /// <summary>
    /// The <c>Identity</c> ID.
    /// </summary>
    public required string IdentityId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required IdentitiesMerchantsRequest Body { get; init; }
}
