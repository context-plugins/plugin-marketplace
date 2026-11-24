using Basiq.Models.Enums;

namespace Basiq.Requests.Insights;

/// <summary>
/// The inputs of the GetInsightType operation.
/// </summary>
public sealed record GetInsightTypeRequest
{
    /// <summary>
    /// The Insight type identifier. Must be one of the supported enum values.
    /// </summary>
    public required TypeId TypeId { get; init; }
}
