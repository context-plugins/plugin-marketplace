namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Swiftlookup operation.
/// </summary>
public sealed record SwiftlookupRequest
{
    /// <summary>
    /// The SWIFT code to lookup information about
    /// </summary>
    public required string Swift { get; init; }
}
