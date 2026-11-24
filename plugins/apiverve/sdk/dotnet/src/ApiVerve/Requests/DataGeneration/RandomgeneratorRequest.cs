namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Randomgenerator operation.
/// </summary>
public sealed record RandomgeneratorRequest
{
    /// <summary>
    /// The type of random data to generate
    /// </summary>
    public string? Type { get; init; }

    /// <summary>
    /// The number of random data to generate (1 to 100)
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Include an AI-generated face avatar (only applies when type=name)
    /// </summary>
    public bool? IncludeAvatar { get; init; }
}
