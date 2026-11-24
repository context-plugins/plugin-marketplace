using CommonElements.Core.Validation.Attributes;

namespace CommonElements.Requests.Meta;

/// <summary>
/// The inputs of the GetKeyUsage operation.
/// </summary>
public sealed record GetKeyUsageRequest
{
    /// <summary>
    /// Days of daily history to return, 1-90. Default 30.
    /// </summary>
    [Minimum(1)]
    [Maximum(90)]
    public int? Days { get; init; }
}
