using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.CustomFields;

/// <summary>
/// The inputs of the GetCustomField operation.
/// </summary>
public sealed record GetCustomFieldRequest
{
    [MinLength(1)]
    public required string CustomFieldId { get; init; }

    public string? ApiToken { get; init; }
}
