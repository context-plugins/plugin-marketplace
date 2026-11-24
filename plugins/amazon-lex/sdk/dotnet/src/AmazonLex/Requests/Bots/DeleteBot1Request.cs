using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteBot1 operation.
/// </summary>
public sealed record DeleteBot1Request
{
    public required string Name { get; init; }

    public ModelsLexDeleteBotRequest? Body { get; init; }
}
