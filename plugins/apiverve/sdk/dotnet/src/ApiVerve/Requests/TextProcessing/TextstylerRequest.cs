using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Textstyler operation.
/// </summary>
public sealed record TextstylerRequest
{
    public required V1TextstylerRequest Body { get; init; }
}
