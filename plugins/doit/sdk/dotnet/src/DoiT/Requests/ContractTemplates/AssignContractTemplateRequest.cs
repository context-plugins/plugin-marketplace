using DoiT.Models;

namespace DoiT.Requests.ContractTemplates;

/// <summary>
/// The inputs of the AssignContractTemplate operation.
/// </summary>
public sealed record AssignContractTemplateRequest
{
    /// <summary>
    /// Identifier of the contract template to apply.
    /// </summary>
    public required string TemplateId { get; init; }

    public required AssignContractTemplateInput Body { get; init; }
}
