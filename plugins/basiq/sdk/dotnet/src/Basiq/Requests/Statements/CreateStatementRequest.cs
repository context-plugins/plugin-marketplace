using Basiq.Core.Models;

namespace Basiq.Requests.Statements;

/// <summary>
/// The inputs of the CreateStatement operation.
/// </summary>
public sealed record CreateStatementRequest
{
    /// <summary>
    /// The unique identifier of the user
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// The identifier of the institution to which the statement relates (e.g., "AU01001"). <b>Note</b>: Sandbox institutions (AU00000) do not support file uploads.
    /// </summary>
    public required string InstitutionId { get; init; }

    /// <summary>
    /// The official PDF bank statement or CSV file to be uploaded. CSV files must conform to the file specification provided by Basiq.
    /// </summary>
    public required BinaryContent Statement { get; init; }
}
