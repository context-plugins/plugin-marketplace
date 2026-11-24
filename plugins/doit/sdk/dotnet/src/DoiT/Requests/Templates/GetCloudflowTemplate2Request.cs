namespace DoiT.Requests.Templates;

/// <summary>
/// The inputs of the GetCloudflowTemplate2 operation.
/// </summary>
public sealed record GetCloudflowTemplate2Request
{
    public required string TemplateId { get; init; }
}
