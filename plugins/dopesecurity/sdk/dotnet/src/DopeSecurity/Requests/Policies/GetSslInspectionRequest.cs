namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the GetSslInspection operation.
/// </summary>
public sealed record GetSslInspectionRequest
{
    /// <summary>
    /// The name of the policy to retrieve SSL inspection for
    /// </summary>
    public required string PolicyName { get; init; }
}
