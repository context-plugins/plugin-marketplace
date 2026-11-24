namespace ApiVerve.Requests.Science;

/// <summary>
/// The inputs of the Periodictable operation.
/// </summary>
public sealed record PeriodictableRequest
{
    /// <summary>
    /// The name of the chemical element to get information about
    /// </summary>
    public required string Name { get; init; }
}
