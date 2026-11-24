namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Randomidentitygenerator operation.
/// </summary>
public sealed record RandomidentitygeneratorRequest
{
    /// <summary>
    /// The number of identities to create
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Include an AI-generated face avatar for each identity
    /// </summary>
    public bool? IncludeAvatar { get; init; }
}
