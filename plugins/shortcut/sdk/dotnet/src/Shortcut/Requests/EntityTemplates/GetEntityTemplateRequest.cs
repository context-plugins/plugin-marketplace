using System;

namespace Shortcut.Requests.EntityTemplates;

/// <summary>
/// The inputs of the GetEntityTemplate operation.
/// </summary>
public sealed record GetEntityTemplateRequest
{
    /// <summary>
    /// The unique ID of the entity template.
    /// </summary>
    public required Guid EntityTemplatePublicId { get; init; }
}
