using Shortcut.Models;

namespace Shortcut.Requests.EntityTemplates;

/// <summary>
/// The inputs of the CreateEntityTemplate operation.
/// </summary>
public sealed record CreateEntityTemplateRequest
{
    /// <summary>
    /// Request parameters for creating an entirely new entity template.
    /// </summary>
    public required CreateEntityTemplate Body { get; init; }
}
