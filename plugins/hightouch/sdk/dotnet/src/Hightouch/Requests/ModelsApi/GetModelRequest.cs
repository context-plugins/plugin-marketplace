namespace Hightouch.Requests.ModelsApi;

/// <summary>
/// The inputs of the GetModel operation.
/// </summary>
public sealed record GetModelRequest
{
    /// <summary>
    /// The id of the model
    /// </summary>
    public required double ModelId { get; init; }
}
