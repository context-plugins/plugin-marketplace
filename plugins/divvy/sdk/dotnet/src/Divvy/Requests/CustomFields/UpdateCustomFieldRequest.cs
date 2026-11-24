using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.CustomFields;

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
