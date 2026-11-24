namespace Hightouch.Requests.ModelsApi;

/// <summary>
/// The inputs of the DeleteModel operation.
/// </summary>
public sealed record DeleteModelRequest
{
    /// <summary>
    /// The model's ID
    /// </summary>
    public required double ModelId { get; init; }
}
