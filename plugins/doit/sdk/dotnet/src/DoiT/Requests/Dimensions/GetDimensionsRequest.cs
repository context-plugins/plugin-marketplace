using DoiT.Models.Enums;

namespace DoiT.Requests.Dimensions;

/// <summary>
/// The inputs of the GetDimensions operation.
/// </summary>
public sealed record GetDimensionsRequest
{
    /// <summary>
    /// Dimension type
    /// </summary>
    public required DimensionsTypes Type { get; init; }

    /// <summary>
    /// Dimension id
    /// </summary>
    public required string Id { get; init; }
}
