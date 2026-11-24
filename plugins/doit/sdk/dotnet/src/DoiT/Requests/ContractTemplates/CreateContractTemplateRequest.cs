using DoiT.Models;

namespace DoiT.Requests.ContractTemplates;

/// <summary>
/// The inputs of the CreateContractTemplate operation.
/// </summary>
public sealed record CreateContractTemplateRequest
{
    public required ContractTemplateInput Body { get; init; }
}
