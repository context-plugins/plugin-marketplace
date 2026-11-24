namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Trivia operation.
/// </summary>
public sealed record TriviaRequest
{
    /// <summary>
    /// The category of the trivia question
    /// </summary>
    public string? Category { get; init; }
}
