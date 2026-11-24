namespace ApiVerve.Requests.DataProcessing;

/// <summary>
/// The inputs of the Counter operation.
/// </summary>
public sealed record CounterRequest
{
    /// <summary>
    /// The ID of the counter (e.g., test_counter)
    /// </summary>
    public required string Id { get; init; }
}
