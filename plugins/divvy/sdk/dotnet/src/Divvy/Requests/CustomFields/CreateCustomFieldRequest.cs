using Divvy.Models;

namespace Divvy.Requests.CustomFields;

/// <summary>
/// The inputs of the CreateCustomField operation.
/// </summary>
public sealed record CreateCustomFieldRequest
{
    public string? ApiToken { get; init; }

    public required CreateCustomFieldRequestDto Body { get; init; }
}
