namespace FinixApiReference.Requests.FeesApi;

/// <summary>
/// The inputs of the GetFee operation.
/// </summary>
public sealed record GetFeeRequest
{
    /// <summary>
    /// The <c>Fee</c> ID.
    /// </summary>
    public required string FeeId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
