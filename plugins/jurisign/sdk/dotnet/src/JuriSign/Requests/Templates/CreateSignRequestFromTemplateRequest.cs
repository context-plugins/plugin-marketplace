using System;
using JuriSign.Models;

namespace JuriSign.Requests.Templates;

/// <summary>
/// The inputs of the CreateSignRequestFromTemplate operation.
/// </summary>
public sealed record CreateSignRequestFromTemplateRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }

    public TemplatesSignRequestsRequest? Body { get; init; }
}
