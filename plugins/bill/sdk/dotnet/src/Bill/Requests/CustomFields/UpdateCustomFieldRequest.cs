using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.CustomFields;

/// <summary>
/// The inputs of the UpdateCustomField operation.
/// </summary>
public sealed record UpdateCustomFieldRequest
{
    [MinLength(1)]
    public required string CustomFieldId { get; init; }

    public string? ApiToken { get; init; }

    public required UpdateCustomFieldRequestDto Body { get; init; }
}
