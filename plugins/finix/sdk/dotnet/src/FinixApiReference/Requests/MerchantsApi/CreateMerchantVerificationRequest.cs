namespace FinixApiReference.Requests.MerchantsApi;

/// <summary>
/// The inputs of the CreateMerchantVerification operation.
/// </summary>
public sealed record CreateMerchantVerificationRequest
{
    /// <summary>
    /// The <c>Merchant</c> ID.
    /// </summary>
    public required string MerchantId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required object Body { get; init; }
}
