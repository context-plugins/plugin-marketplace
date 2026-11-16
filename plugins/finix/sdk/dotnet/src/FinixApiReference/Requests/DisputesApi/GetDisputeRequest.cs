namespace FinixApiReference.Requests.DisputesApi;

/// <summary>
/// The inputs of the GetDispute operation.
/// </summary>
public sealed record GetDisputeRequest
{
    /// <summary>
    /// The ID of <c>Dispute</c>.
    /// </summary>
    public required string DisputeId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
