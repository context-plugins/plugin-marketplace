using DoiT.Models;

namespace DoiT.Requests.Insights;

/// <summary>
/// The inputs of the PostInsightResults operation.
/// </summary>
public sealed record PostInsightResultsRequest
{
    public CreateResultsBody? Body { get; init; }
}
