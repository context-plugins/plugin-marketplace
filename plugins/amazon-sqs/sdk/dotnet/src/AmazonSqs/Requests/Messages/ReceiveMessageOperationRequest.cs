using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Messages;

/// <summary>
/// The inputs of the ReceiveMessage operation.
/// </summary>
public sealed record ReceiveMessageOperationRequest
{
    public required XAmzTarget7 XAmzTarget { get; init; }
}
