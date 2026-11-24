namespace Soda.Requests.Runners;

/// <summary>
/// The inputs of the GetApiV1Runners operation.
/// </summary>
public sealed record GetApiV1RunnersRequest
{
    public int? Page { get; init; }

    public int? Size { get; init; }
}
