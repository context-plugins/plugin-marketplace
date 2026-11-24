using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.GraphqlApis;

/// <summary>
/// The inputs of the EvaluateMappingTemplate operation.
/// </summary>
public sealed record EvaluateMappingTemplateRequest
{
    public V1DataplaneEvaluatetemplateRequest? Body { get; init; }
}
