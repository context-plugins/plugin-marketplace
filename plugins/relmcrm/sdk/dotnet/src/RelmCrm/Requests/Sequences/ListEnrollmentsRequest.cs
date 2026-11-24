namespace RelmCrm.Requests.Sequences;

/// <summary>
/// The inputs of the ListEnrollments operation.
/// </summary>
public sealed record ListEnrollmentsRequest
{
    public required string Id { get; init; }
}
