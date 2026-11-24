using System;

namespace JuriSign.Requests.Templates;

/// <summary>
/// The inputs of the GetTemplate operation.
/// </summary>
public sealed record GetTemplateRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
