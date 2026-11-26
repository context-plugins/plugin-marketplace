using System.ComponentModel.DataAnnotations;

namespace AlphAi.Requests.News;

/// <summary>
/// The inputs of the GetApiNewsByUidRelated operation.
/// </summary>
public sealed record GetApiNewsByUidRelatedRequest
{
    [RegularExpression("^[a-f0-9]{16}$")]
    public required string Uid { get; init; }
}
