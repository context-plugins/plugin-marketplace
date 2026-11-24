namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Useragentgenerator operation.
/// </summary>
public sealed record UseragentgeneratorRequest
{
    /// <summary>
    /// The device type for the user agent string
    /// </summary>
    public string? Device { get; init; }
}
