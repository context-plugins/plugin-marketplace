using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Requests.Usage;

/// <summary>
/// The inputs of the GetInferenceUsageAggregateV2UsageInferenceGet operation.
/// </summary>
public sealed record GetInferenceUsageAggregateV2UsageInferenceGetRequest
{
    /// <summary>
    /// Window start; defaults to end-7d
    /// </summary>
    public Start? Start { get; init; }

    /// <summary>
    /// Window end; defaults to now
    /// </summary>
    public End? End { get; init; }

    public BucketWidth BucketWidth { get; init; } = BucketWidth._1D;

    /// <summary>
    /// Grouping dimensions; repeat the parameter to group by several at once
    /// </summary>
    public GroupBy1? GroupBy { get; init; }

    public UserId? UserId { get; init; }

    public ApiKeyId? ApiKeyId { get; init; }

    public ByokCredentialId? ByokCredentialId { get; init; }
}
