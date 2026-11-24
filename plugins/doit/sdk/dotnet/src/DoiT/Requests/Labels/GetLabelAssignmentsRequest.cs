namespace DoiT.Requests.Labels;

/// <summary>
/// The inputs of the GetLabelAssignments operation.
/// </summary>
public sealed record GetLabelAssignmentsRequest
{
    /// <summary>
    /// Label ID
    /// </summary>
    public required string Id { get; init; }
}
