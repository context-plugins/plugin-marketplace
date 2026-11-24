using Deliverd.Models;

namespace Deliverd.Requests.Screen;

/// <summary>
/// The inputs of the PostApiV1Screen operation.
/// </summary>
public sealed record PostApiV1ScreenRequest
{
    public ApiV1ScreenRequest? Body { get; init; }
}
