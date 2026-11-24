using System.ComponentModel.DataAnnotations;
using Airtable.Models;

namespace Airtable.Requests.Fields;

/// <summary>
/// The inputs of the CreateField operation.
/// </summary>
public sealed record CreateFieldOperationRequest
{
    /// <summary>
    /// The unique identifier of the base (starts with 'app').
    /// </summary>
    [RegularExpression("^app[a-zA-Z0-9]+$")]
    public required string BaseId { get; init; }

    /// <summary>
    /// The unique identifier of the table (starts with 'tbl').
    /// </summary>
    [RegularExpression("^tbl[a-zA-Z0-9]+$")]
    public required string TableId { get; init; }

    public required CreateFieldRequest Body { get; init; }
}
