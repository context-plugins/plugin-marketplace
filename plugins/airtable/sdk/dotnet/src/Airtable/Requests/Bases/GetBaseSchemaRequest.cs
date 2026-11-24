using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Airtable.Models.Enums;

namespace Airtable.Requests.Bases;

/// <summary>
/// The inputs of the GetBaseSchema operation.
/// </summary>
public sealed record GetBaseSchemaRequest
{
    /// <summary>
    /// The unique identifier of the base (starts with 'app').
    /// </summary>
    [RegularExpression("^app[a-zA-Z0-9]+$")]
    public required string BaseId { get; init; }

    /// <summary>
    /// Additional information to include in the response. Pass visibleFieldIds to include visible field IDs for each view.
    /// </summary>
    public IReadOnlyList<Include>? Include { get; init; }
}
