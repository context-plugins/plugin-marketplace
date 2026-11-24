using Hud.Models;

namespace Hud.Requests.Completions;

/// <summary>
/// The inputs of the PostCompletionV2CompletionsPost operation.
/// </summary>
public sealed record PostCompletionV2CompletionsPostRequest
{
    public required CompletionRequest Body { get; init; }
}
