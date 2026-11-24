using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteIntent1 operation.
/// </summary>
public sealed record DeleteIntent1Request
{
    public required string Name { get; init; }

    public ModelsLexDeleteIntentRequest? Body { get; init; }
}
