namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Superheroname operation.
/// </summary>
public sealed record SuperheronameRequest
{
    /// <summary>
    /// Name style
    /// </summary>
    public string? Style { get; init; }
}
