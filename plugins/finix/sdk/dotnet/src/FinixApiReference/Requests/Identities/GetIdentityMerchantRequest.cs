namespace FinixApiReference.Requests.Identities;

/// <summary>
/// The inputs of the GetIdentityMerchant operation.
/// </summary>
public sealed record GetIdentityMerchantRequest
{
    /// <summary>
    /// The <c>Identity</c> ID.
    /// </summary>
    public required string IdentityId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
