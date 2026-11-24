using System;

namespace JuriSign.Requests.PublicForms;

/// <summary>
/// The inputs of the GetPublicForm operation.
/// </summary>
public sealed record GetPublicFormRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
