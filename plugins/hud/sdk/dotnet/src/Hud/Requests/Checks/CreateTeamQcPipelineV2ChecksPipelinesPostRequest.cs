using Hud.Models;

namespace Hud.Requests.Checks;

/// <summary>
/// The inputs of the CreateTeamQcPipelineV2ChecksPipelinesPost operation.
/// </summary>
public sealed record CreateTeamQcPipelineV2ChecksPipelinesPostRequest
{
    public required QcPipelineCreateRequest Body { get; init; }
}
