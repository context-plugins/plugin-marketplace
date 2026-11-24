using UiPath.Models;

namespace UiPath.Requests.Requirements;

/// <summary>
/// The inputs of the CreateRequirement operation.
/// </summary>
public sealed record CreateRequirementOperationRequest
{
    /// <summary>
    /// Unique identifier of the test project
    /// </summary>
    public required string ProjectId { get; init; }

    public required CreateRequirementRequest Body { get; init; }
}
