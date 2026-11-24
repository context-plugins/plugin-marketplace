namespace DoiT.Requests.Labels;

/// <summary>
/// The inputs of the DeleteLabel operation.
/// </summary>
public sealed record DeleteLabelRequest
{
    /// <summary>
    /// Label ID
    /// </summary>
    public required string Id { get; init; }
}
