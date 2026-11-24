namespace Soda.Requests.Checks;

/// <summary>
/// The inputs of the DeleteApiV1ChecksCheckId operation.
/// </summary>
public sealed record DeleteApiV1ChecksCheckIdRequest
{
    public required string CheckId { get; init; }
}
