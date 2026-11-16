namespace FinixApiReference.Requests.Microdeposits;

/// <summary>
/// The inputs of the GetMicroDeposit operation.
/// </summary>
public sealed record GetMicroDepositRequest
{
    /// <summary>
    /// The ID of the <c>microdeposit</c>.
    /// </summary>
    public required string MicrodepositId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
