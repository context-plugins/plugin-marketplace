using Boomi.Models.AnyOf;

namespace Boomi.Requests.Messages;

/// <summary>
/// The inputs of the PublishMessages operation.
/// </summary>
public sealed record PublishMessagesRequest
{
    public required RequestModel Body { get; init; }
}
