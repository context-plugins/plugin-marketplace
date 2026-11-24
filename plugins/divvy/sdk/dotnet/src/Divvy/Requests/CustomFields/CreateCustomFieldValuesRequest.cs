using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.CustomFields;

/// <summary>
/// The inputs of the CreateCustomFieldValues operation.
/// </summary>
public sealed record CreateCustomFieldValuesRequest
{
    [MinLength(1)]
    public required string CustomFieldId { get; init; }

    public string? ApiToken { get; init; }

    public required CreateCustomFieldValueRequestDto Body { get; init; }
}
