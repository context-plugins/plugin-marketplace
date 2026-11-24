using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.Operations;

/// <summary>
/// The inputs of the DeprecateWorkflowType2 operation.
/// </summary>
public sealed record DeprecateWorkflowType2Request
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
