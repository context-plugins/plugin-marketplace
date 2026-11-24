using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Slugify operation.
/// </summary>
public sealed record SlugifyRequest
{
    public required V1SlugifyRequest Body { get; init; }
}
