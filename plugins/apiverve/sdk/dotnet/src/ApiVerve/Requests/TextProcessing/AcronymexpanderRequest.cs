namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Acronymexpander operation.
/// </summary>
public sealed record AcronymexpanderRequest
{
    /// <summary>
    /// The acronym to expand (max 20 characters)
    /// </summary>
    public required string Acronym { get; init; }

    /// <summary>
    /// Optional context to help determine the correct meaning
    /// </summary>
    public string? Context { get; init; }
}
