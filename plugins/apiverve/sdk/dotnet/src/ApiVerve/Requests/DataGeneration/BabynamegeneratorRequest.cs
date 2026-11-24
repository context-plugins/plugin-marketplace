namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Babynamegenerator operation.
/// </summary>
public sealed record BabynamegeneratorRequest
{
    /// <summary>
    /// The gender for the generated names
    /// </summary>
    public required string Gender { get; init; }

    /// <summary>
    /// The number of names to generate
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Include an AI-generated child face avatar matching gender
    /// </summary>
    public bool? IncludeAvatar { get; init; }
}
