using AmazonLex.Models;

namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the CreateBotVersion2 operation.
/// </summary>
public sealed record CreateBotVersion2Request
{
    public required string Name { get; init; }

    public ModelsLexCreateBotVersionRequest? Body { get; init; }
}
