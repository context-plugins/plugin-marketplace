using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.CustomFields;

/// <summary>
/// The inputs of the DeleteCustomFieldValue operation.
/// </summary>
public sealed record DeleteCustomFieldValueRequest
{
    [MinLength(1)]
    public required string CustomFieldId { get; init; }

    public string? ApiToken { get; init; }

    public required DeleteCustomFieldValuesRequestDto Body { get; init; }
}
