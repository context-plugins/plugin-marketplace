using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the UndeprecateWorkflowType2 operation.
/// </summary>
public sealed record UndeprecateWorkflowType2Request
{
    public required XAmzTarget19 XAmzTarget { get; init; }
}
