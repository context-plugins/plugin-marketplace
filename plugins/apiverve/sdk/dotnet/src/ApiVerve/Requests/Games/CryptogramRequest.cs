namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Cryptogram operation.
/// </summary>
public sealed record CryptogramRequest
{
    /// <summary>
    /// Text to encode (max 500 characters)
    /// </summary>
    public string? Text { get; init; }

    /// <summary>
    /// Use a random famous quote instead of text (a quote is also used when text is omitted)
    /// </summary>
    public bool? Random { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable puzzle image
    /// </summary>
    public bool? Image { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable solution image
    /// </summary>
    public bool? SolutionImage { get; init; }
}
