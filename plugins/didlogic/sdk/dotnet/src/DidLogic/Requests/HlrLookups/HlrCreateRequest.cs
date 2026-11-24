using DidLogic.Models;

namespace DidLogic.Requests.HlrLookups;

/// <summary>
/// The inputs of the HlrCreate operation.
/// </summary>
public sealed record HlrCreateRequest
{
    public required ApiV2HlrRequest Body { get; init; }
}
