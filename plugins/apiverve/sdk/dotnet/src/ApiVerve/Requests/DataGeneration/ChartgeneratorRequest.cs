using ApiVerve.Models;

namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Chartgenerator operation.
/// </summary>
public sealed record ChartgeneratorRequest
{
    public required V1ChartgeneratorRequest Body { get; init; }
}
