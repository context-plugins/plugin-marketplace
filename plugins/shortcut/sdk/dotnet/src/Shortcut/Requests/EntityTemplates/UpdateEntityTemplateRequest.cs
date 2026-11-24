using System;
using Shortcut.Models;

namespace Shortcut.Requests.EntityTemplates;

/// <summary>
/// The inputs of the UpdateEntityTemplate operation.
/// </summary>
public sealed record UpdateEntityTemplateRequest
{
    /// <summary>
    /// The unique ID of the template to be updated.
    /// </summary>
    public required Guid EntityTemplatePublicId { get; init; }

    /// <summary>
    /// Request parameters for changing either a template's name or any of
    ///   the attributes it is designed to pre-populate.
    /// </summary>
    public required UpdateEntityTemplate Body { get; init; }
}
