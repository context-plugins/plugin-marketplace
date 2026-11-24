using System;

namespace JuriSign.Requests.Templates;

/// <summary>
/// The inputs of the DeleteTemplate operation.
/// </summary>
public sealed record DeleteTemplateRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
