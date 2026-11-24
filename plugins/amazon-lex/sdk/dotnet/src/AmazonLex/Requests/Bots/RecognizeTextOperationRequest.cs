using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the RecognizeText operation.
/// </summary>
public sealed record RecognizeTextOperationRequest
{
    public required string BotId { get; init; }

    public required string BotAliasId { get; init; }

    public required string LocaleId { get; init; }

    public required string SessionId { get; init; }

    public RecognizeTextRequest? Body { get; init; }
}
