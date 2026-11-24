namespace ApiVerve.Requests.Parsers;

/// <summary>
/// The inputs of the Humannameparser operation.
/// </summary>
public sealed record HumannameparserRequest
{
    /// <summary>
    /// The human name to parse
    /// </summary>
    public required string Name { get; init; }
}
