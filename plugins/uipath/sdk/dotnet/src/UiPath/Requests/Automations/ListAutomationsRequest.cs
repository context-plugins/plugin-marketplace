using UiPath.Core.Validation.Attributes;

namespace UiPath.Requests.Automations;

/// <summary>
/// The inputs of the ListAutomations operation.
/// </summary>
public sealed record ListAutomationsRequest
{
    /// <summary>
    /// Filter automations by pipeline phase (e.g., Idea, Assessment, Development, Testing, Production)
    /// </summary>
    public string? Phase { get; init; }

    /// <summary>
    /// Filter automations by status within their current phase
    /// </summary>
    public string? Status { get; init; }

    /// <summary>
    /// Page number for pagination (1-based)
    /// </summary>
    [Minimum(1)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// Number of records per page
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PageSize { get; init; } = 20;
}
