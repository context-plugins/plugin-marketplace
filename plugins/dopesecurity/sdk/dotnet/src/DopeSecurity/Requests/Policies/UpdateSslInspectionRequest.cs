using DopeSecurity.Models;

namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the UpdateSslInspection operation.
/// </summary>
public sealed record UpdateSslInspectionRequest
{
    /// <summary>
    /// The name of the policy to update SSL inspection for
    /// </summary>
    public required string PolicyName { get; init; }

    public required PoliciesSslInspectionRequest Body { get; init; }
}
