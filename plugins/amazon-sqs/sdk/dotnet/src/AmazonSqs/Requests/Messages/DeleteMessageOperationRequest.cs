using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Messages;

/// <summary>
/// The inputs of the DeleteMessage operation.
/// </summary>
public sealed record DeleteMessageOperationRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
