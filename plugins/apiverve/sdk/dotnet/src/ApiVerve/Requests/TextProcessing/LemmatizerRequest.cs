using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Lemmatizer operation.
/// </summary>
public sealed record LemmatizerRequest
{
    public required V1LemmatizerRequest Body { get; init; }
}
