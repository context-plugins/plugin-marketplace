using Deliverd.Models.Enums;

namespace Deliverd.Requests.Playbooks;

/// <summary>
/// The inputs of the GetApiV1Playbooks operation.
/// </summary>
public sealed record GetApiV1PlaybooksRequest
{
    /// <summary>
    /// procedure for playbooks of steps, prompt for approved prompts; both when omitted
    /// </summary>
    public KindDeliverdDevPlaybooksApi? Kind { get; init; }
}
