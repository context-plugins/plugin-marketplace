using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Operations;

/// <summary>
/// The inputs of the EvaluateCode operation.
/// </summary>
public sealed record EvaluateCodeRequest
{
    public V1DataplaneEvaluatecodeRequest? Body { get; init; }
}
