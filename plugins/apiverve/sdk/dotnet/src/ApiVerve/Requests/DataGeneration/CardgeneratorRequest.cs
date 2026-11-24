namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Cardgenerator operation.
/// </summary>
public sealed record CardgeneratorRequest
{
    /// <summary>
    /// The brand of the card to generate
    /// </summary>
    public string? Brand { get; init; }

    /// <summary>
    /// The number of test card numbers to generate
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Include an AI-generated face avatar for the card owner
    /// </summary>
    public bool? IncludeAvatar { get; init; }
}
