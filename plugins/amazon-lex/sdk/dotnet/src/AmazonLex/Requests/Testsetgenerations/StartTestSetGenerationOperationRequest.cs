using AmazonLex.Models;

namespace AmazonLex.Requests.Testsetgenerations;

/// <summary>
/// The inputs of the StartTestSetGeneration operation.
/// </summary>
public sealed record StartTestSetGenerationOperationRequest
{
    public StartTestSetGenerationRequest? Body { get; init; }
}
