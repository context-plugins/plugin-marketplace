using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Emojidecorator operation.
/// </summary>
public sealed record EmojidecoratorRequest
{
    public required V1EmojidecoratorRequest Body { get; init; }
}
