using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Gibberishdetector operation.
/// </summary>
public sealed record GibberishdetectorRequest
{
    public required V1GibberishdetectorRequest Body { get; init; }
}
