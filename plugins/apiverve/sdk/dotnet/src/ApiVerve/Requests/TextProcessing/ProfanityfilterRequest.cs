using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Profanityfilter operation.
/// </summary>
public sealed record ProfanityfilterRequest
{
    public required V1ProfanityfilterRequest Body { get; init; }
}
