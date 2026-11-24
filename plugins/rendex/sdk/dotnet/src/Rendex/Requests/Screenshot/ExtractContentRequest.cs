using Rendex.Models;

namespace Rendex.Requests.Screenshot;

/// <summary>
/// The inputs of the ExtractContent operation.
/// </summary>
public sealed record ExtractContentRequest
{
    public required V1ExtractRequest Body { get; init; }
}
