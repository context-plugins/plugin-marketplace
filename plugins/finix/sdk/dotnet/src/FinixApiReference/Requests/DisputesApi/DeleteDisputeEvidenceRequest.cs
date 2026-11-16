namespace FinixApiReference.Requests.DisputesApi;

/// <summary>
/// The inputs of the DeleteDisputeEvidence operation.
/// </summary>
public sealed record DeleteDisputeEvidenceRequest
{
    /// <summary>
    /// The ID of <c>Dispute</c> to fetch evidence for.
    /// </summary>
    public required string DisputeId { get; init; }

    /// <summary>
    /// The ID of <c>Dispute Evidence</c> to fetch.
    /// </summary>
    public required string EvidenceId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
