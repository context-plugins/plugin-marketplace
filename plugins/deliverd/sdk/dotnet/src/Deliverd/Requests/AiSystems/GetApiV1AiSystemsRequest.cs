using Deliverd.Models.Enums;

namespace Deliverd.Requests.AiSystems;

/// <summary>
/// The inputs of the GetApiV1AiSystems operation.
/// </summary>
public sealed record GetApiV1AiSystemsRequest
{
    public StatusDeliverdDevAiSystemsApi? Status { get; init; }
}
