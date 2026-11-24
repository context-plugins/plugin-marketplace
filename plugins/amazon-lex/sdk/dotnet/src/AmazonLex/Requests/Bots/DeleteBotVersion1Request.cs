using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteBotVersion1 operation.
/// </summary>
public sealed record DeleteBotVersion1Request
{
    public required string Name { get; init; }

    public required string Version { get; init; }

    public ModelsLexDeleteBotVersionRequest? Body { get; init; }
}
