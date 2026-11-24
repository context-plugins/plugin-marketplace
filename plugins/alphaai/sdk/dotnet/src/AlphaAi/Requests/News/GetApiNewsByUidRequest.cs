using System.ComponentModel.DataAnnotations;

namespace AlphaAi.Requests.News;

/// <summary>
/// The inputs of the GetApiNewsByUid operation.
/// </summary>
public sealed record GetApiNewsByUidRequest
{
    [RegularExpression("^[a-f0-9]{16}$")]
    public required string Uid { get; init; }
}
