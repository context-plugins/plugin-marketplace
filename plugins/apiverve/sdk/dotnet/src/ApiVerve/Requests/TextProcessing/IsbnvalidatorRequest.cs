namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Isbnvalidator operation.
/// </summary>
public sealed record IsbnvalidatorRequest
{
    /// <summary>
    /// The ISBN number to validate (ISBN-10 or ISBN-13, with or without separators)
    /// </summary>
    public required string Isbn { get; init; }
}
