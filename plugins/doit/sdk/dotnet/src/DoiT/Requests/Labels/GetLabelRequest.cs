namespace DoiT.Requests.Labels;

/// <summary>
/// The inputs of the GetLabel operation.
/// </summary>
public sealed record GetLabelRequest
{
    /// <summary>
    /// Label ID
    /// </summary>
    public required string Id { get; init; }
}
