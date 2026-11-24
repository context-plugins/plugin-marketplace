namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Randomusergenerator operation.
/// </summary>
public sealed record RandomusergeneratorRequest
{
    /// <summary>
    /// The number of users to generate
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Include an AI-generated face avatar matching user's gender and age
    /// </summary>
    public bool? IncludeAvatar { get; init; }
}
