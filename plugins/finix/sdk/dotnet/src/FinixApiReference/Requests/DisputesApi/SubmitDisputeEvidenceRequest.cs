using FinixApiReference.Models;

namespace FinixApiReference.Requests.DisputesApi;

/// <summary>
/// The inputs of the SubmitDisputeEvidence operation.
/// </summary>
public sealed record SubmitDisputeEvidenceRequest
{
    /// <summary>
    /// ID of <c>Dispute</c> to move forward and submit evidence.
    /// </summary>
    public required string DisputeId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required SubmitDisputeEvidence Body { get; init; }
}
