namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Charades operation.
/// </summary>
public sealed record CharadesRequest
{
    /// <summary>
    /// Category: all, movies, books, songs, actions, animals, objects
    /// </summary>
    public string? Category { get; init; }
}
