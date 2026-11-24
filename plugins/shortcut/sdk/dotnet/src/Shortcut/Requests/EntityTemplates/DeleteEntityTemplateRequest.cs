using System;

namespace Shortcut.Requests.EntityTemplates;

/// <summary>
/// The inputs of the DeleteEntityTemplate operation.
/// </summary>
public sealed record DeleteEntityTemplateRequest
{
    /// <summary>
    /// The unique ID of the entity template.
    /// </summary>
    public required Guid EntityTemplatePublicId { get; init; }
}
