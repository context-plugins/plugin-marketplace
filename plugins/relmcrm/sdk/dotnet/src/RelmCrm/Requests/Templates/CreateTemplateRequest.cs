using RelmCrm.Models;

namespace RelmCrm.Requests.Templates;

/// <summary>
/// The inputs of the CreateTemplate operation.
/// </summary>
public sealed record CreateTemplateRequest
{
    public required TemplatesRequest Body { get; init; }
}
