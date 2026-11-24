using AmazonLex.Models;

namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the DeleteBotVersion2 operation.
/// </summary>
public sealed record DeleteBotVersion2Request
{
    public required string Name { get; init; }

    public required string Version { get; init; }

    public ModelsLexDeleteBotVersionRequest? Body { get; init; }
}
