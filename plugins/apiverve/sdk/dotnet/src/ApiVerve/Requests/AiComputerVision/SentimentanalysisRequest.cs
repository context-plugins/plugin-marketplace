using ApiVerve.Models;

namespace ApiVerve.Requests.AiComputerVision;

/// <summary>
/// The inputs of the Sentimentanalysis operation.
/// </summary>
public sealed record SentimentanalysisRequest
{
    public required V1SentimentanalysisRequest Body { get; init; }
}
