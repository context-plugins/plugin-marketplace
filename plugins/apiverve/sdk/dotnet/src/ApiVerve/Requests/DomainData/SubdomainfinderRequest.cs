namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Subdomainfinder operation.
/// </summary>
public sealed record SubdomainfinderRequest
{
    /// <summary>
    /// The domain you want to find all the available subdomains for (e.g. google.com)
    /// </summary>
    public required string Domain { get; init; }

    /// <summary>
    /// Limit the number of subdomains to detect
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Search the full wordlist instead of only certificate transparency and common names. Slower, and may still report complete: false when the time limit is reached
    /// </summary>
    public bool? DeepScan { get; init; }
}
