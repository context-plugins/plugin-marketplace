using Deliverd.Models;

namespace Deliverd.Requests.Actions;

/// <summary>
/// The inputs of the PostApiV1Actions operation.
/// </summary>
public sealed record PostApiV1ActionsRequest
{
    public ApiV1ActionsRequest? Body { get; init; }
}
