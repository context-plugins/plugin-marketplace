using AmazonLex.Models;

namespace AmazonLex.Requests.Testsets;

/// <summary>
/// The inputs of the StartTestExecution2 operation.
/// </summary>
public sealed record StartTestExecution2Request
{
    public required string TestSetId { get; init; }

    public StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi? Body { get; init; }
}
