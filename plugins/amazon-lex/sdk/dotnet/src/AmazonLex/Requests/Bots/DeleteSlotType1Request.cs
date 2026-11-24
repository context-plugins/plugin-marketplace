using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteSlotType1 operation.
/// </summary>
public sealed record DeleteSlotType1Request
{
    public required string Name { get; init; }

    public ModelsLexDeleteSlotTypeRequest? Body { get; init; }
}
