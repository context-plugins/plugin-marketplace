namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Zipdemographics operation.
/// </summary>
public sealed record ZipdemographicsRequest
{
    /// <summary>
    /// 5-digit US ZIP code
    /// </summary>
    public required string Zip { get; init; }
}
