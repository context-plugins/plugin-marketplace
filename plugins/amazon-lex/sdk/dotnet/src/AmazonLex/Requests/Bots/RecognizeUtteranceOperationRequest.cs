using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the RecognizeUtterance operation.
/// </summary>
public sealed record RecognizeUtteranceOperationRequest
{
    public required string BotId { get; init; }

    public required string BotAliasId { get; init; }

    public required string LocaleId { get; init; }

    public required string SessionId { get; init; }

    public RecognizeUtteranceRequest? Body { get; init; }
}
