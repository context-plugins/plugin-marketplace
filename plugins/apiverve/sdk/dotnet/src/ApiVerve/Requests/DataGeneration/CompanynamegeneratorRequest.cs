namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Companynamegenerator operation.
/// </summary>
public sealed record CompanynamegeneratorRequest
{
    /// <summary>
    /// The keyword to generate company names from
    /// </summary>
    public required string Keyword { get; init; }

    /// <summary>
    /// The number of company names to generate
    /// </summary>
    public int? Count { get; init; }
}
