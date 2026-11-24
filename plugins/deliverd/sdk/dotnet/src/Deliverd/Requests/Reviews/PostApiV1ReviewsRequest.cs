using Deliverd.Models;

namespace Deliverd.Requests.Reviews;

/// <summary>
/// The inputs of the PostApiV1Reviews operation.
/// </summary>
public sealed record PostApiV1ReviewsRequest
{
    public ApiV1ReviewsRequest? Body { get; init; }
}
