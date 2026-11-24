using Deliverd.Models;

namespace Deliverd.Requests.AiSystems;

/// <summary>
/// The inputs of the PostApiV1AiSystems operation.
/// </summary>
public sealed record PostApiV1AiSystemsRequest
{
    public ApiV1AiSystemsRequest? Body { get; init; }
}
