using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Titlecapitalization operation.
/// </summary>
public sealed record TitlecapitalizationRequest
{
    public required V1TitlecapitalizationRequest Body { get; init; }
}
