using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.CustomFields;

/// <summary>
/// The inputs of the GetCustomFieldValues operation.
/// </summary>
public sealed record GetCustomFieldValuesRequest
{
    [MinLength(1)]
    public required string CustomFieldId { get; init; }

    [MinLength(1)]
    public required string CustomFieldValueId { get; init; }

    public string? ApiToken { get; init; }
}
