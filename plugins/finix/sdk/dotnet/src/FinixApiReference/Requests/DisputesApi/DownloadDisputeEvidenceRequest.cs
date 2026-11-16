namespace FinixApiReference.Requests.DisputesApi;

/// <summary>
/// The inputs of the DownloadDisputeEvidence operation.
/// </summary>
public sealed record DownloadDisputeEvidenceRequest
{
    /// <summary>
    /// ID of <c>Dispute</c> to download evidence from.
    /// </summary>
    public required string DisputeId { get; init; }

    /// <summary>
    /// ID of <c>evidence</c> to download.
    /// </summary>
    public required string EvidenceId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
