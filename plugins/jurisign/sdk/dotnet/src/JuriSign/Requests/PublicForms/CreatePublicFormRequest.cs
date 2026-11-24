using JuriSign.Models;

namespace JuriSign.Requests.PublicForms;

/// <summary>
/// The inputs of the CreatePublicForm operation.
/// </summary>
public sealed record CreatePublicFormRequest
{
    public required PublicFormsRequest Body { get; init; }
}
