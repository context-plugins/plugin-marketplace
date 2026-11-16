using FinixApiReference.Core.Models;

namespace FinixApiReference.Requests.DisputesApi;

/// <summary>
/// The inputs of the CreateDisputeEvidence operation.
/// </summary>
public sealed record CreateDisputeEvidenceRequest
{
    /// <summary>
    /// The ID of <c>Dispute</c>.
    /// </summary>
    public required string DisputeId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    /// <summary>
    /// The binary contents of the file.
    /// </summary>
    public BinaryContent? File { get; init; }
}
