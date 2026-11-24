namespace Perigon.Requests.SupplementalEndpoints;

/// <summary>
/// The inputs of the GetJournalistById operation.
/// </summary>
public sealed record GetJournalistByIdRequest
{
    public required string Id { get; init; }
}
