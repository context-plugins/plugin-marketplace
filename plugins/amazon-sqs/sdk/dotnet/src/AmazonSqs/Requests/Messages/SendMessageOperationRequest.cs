using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Messages;

/// <summary>
/// The inputs of the SendMessage operation.
/// </summary>
public sealed record SendMessageOperationRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
