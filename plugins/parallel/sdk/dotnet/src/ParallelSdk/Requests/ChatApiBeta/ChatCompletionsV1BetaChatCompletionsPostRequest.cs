using ParallelSdk.Models;

namespace ParallelSdk.Requests.ChatApiBeta;

/// <summary>
/// The inputs of the ChatCompletionsV1BetaChatCompletionsPost operation.
/// </summary>
public sealed record ChatCompletionsV1BetaChatCompletionsPostRequest
{
    public required ChatCompletionRequest Body { get; init; }
}
