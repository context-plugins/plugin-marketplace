using System;

namespace JuriSign.Requests.PublicForms;

/// <summary>
/// The inputs of the DeletePublicForm operation.
/// </summary>
public sealed record DeletePublicFormRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
