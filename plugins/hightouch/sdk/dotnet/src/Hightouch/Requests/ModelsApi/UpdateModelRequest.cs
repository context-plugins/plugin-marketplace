using Hightouch.Models;

namespace Hightouch.Requests.ModelsApi;

/// <summary>
/// The inputs of the UpdateModel operation.
/// </summary>
public sealed record UpdateModelRequest
{
    /// <summary>
    /// The model's ID
    /// </summary>
    public required double ModelId { get; init; }

    public required ModelUpdate Body { get; init; }
}
