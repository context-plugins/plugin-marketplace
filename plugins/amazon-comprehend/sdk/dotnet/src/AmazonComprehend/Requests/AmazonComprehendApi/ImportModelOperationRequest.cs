using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ImportModel operation.
/// </summary>
public sealed record ImportModelOperationRequest
{
    public required XAmzTarget75 XAmzTarget { get; init; }
}
