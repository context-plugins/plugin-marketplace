namespace ForceDream.Requests;

/// <summary>
/// The inputs of the GetInvokeResult operation.
/// </summary>
public sealed record GetInvokeResultRequest
{
    public required string Slug { get; init; }

    public required string TaskId { get; init; }
}
