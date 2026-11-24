using DoiT.Models;

namespace DoiT.Requests.ContractTemplates;

/// <summary>
/// The inputs of the UpdateContractTemplate operation.
/// </summary>
public sealed record UpdateContractTemplateRequest
{
    public required string TemplateId { get; init; }

    public required ContractTemplateInput Body { get; init; }
}
