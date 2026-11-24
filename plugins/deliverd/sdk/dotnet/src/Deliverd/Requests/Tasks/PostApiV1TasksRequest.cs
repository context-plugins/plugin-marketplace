using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1Tasks operation.
/// </summary>
public sealed record PostApiV1TasksRequest
{
    public ApiV1TasksRequest? Body { get; init; }
}
