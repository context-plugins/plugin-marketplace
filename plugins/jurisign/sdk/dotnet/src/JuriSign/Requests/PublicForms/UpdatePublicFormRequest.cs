using System;
using JuriSign.Models;

namespace JuriSign.Requests.PublicForms;

/// <summary>
/// The inputs of the UpdatePublicForm operation.
/// </summary>
public sealed record UpdatePublicFormRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }

    public PublicFormsRequest1? Body { get; init; }
}
