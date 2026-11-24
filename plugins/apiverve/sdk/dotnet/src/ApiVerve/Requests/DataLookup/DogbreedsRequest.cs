namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Dogbreeds operation.
/// </summary>
public sealed record DogbreedsRequest
{
    /// <summary>
    /// The name of the dog breed to get information about
    /// </summary>
    public required string Breed { get; init; }
}
