using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1StampV1StampPost operation.
/// </summary>
public sealed record V1StampV1StampPostRequest
{
    public XApiKey? XApiKey { get; init; }
}
