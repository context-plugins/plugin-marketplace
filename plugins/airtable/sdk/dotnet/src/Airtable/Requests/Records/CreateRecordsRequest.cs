using System.ComponentModel.DataAnnotations;
using Airtable.Models;

namespace Airtable.Requests.Records;

/// <summary>
/// The inputs of the CreateRecords operation.
/// </summary>
public sealed record CreateRecordsRequest
{
    /// <summary>
    /// The unique identifier of the base (starts with 'app').
    /// </summary>
    [RegularExpression("^app[a-zA-Z0-9]+$")]
    public required string BaseId { get; init; }

    /// <summary>
    /// The name or unique identifier (starts with 'tbl') of the table.
    /// </summary>
    public required string TableIdOrName { get; init; }

    public required RequestModel Body { get; init; }
}
