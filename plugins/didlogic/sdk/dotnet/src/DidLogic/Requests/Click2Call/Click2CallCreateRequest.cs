using DidLogic.Models;

namespace DidLogic.Requests.Click2Call;

/// <summary>
/// The inputs of the Click2CallCreate operation.
/// </summary>
public sealed record Click2CallCreateRequest
{
    public ApiV1Click2CallRequest? Body { get; init; }
}
