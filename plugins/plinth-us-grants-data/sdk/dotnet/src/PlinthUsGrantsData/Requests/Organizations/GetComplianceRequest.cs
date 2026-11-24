namespace PlinthUsGrantsData.Requests.Organizations;

/// <summary>
/// The inputs of the GetCompliance operation.
/// </summary>
public sealed record GetComplianceRequest
{
    public required string Ein { get; init; }
}
