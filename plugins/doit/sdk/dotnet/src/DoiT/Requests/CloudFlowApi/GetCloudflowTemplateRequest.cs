namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the GetCloudflowTemplate operation.
/// </summary>
public sealed record GetCloudflowTemplateRequest
{
    public required string TemplateId { get; init; }
}
