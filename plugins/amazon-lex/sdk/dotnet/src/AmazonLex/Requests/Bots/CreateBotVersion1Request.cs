using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the CreateBotVersion1 operation.
/// </summary>
public sealed record CreateBotVersion1Request
{
    public required string Name { get; init; }

    public ModelsLexCreateBotVersionRequest? Body { get; init; }
}
