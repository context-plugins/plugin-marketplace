namespace HealthGorilla.Requests.BinaryApi;

/// <summary>
/// The inputs of the ReadBinary operation.
/// </summary>
public sealed record ReadBinaryRequest
{
    /// <summary>
    /// The logical id of the resource.
    /// </summary>
    public required string Id { get; init; }
}
