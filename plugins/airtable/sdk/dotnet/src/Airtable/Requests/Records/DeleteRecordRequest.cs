using System.ComponentModel.DataAnnotations;

namespace Airtable.Requests.Records;

/// <summary>
/// The inputs of the DeleteRecord operation.
/// </summary>
public sealed record DeleteRecordRequest
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

    /// <summary>
    /// The unique identifier of the record (starts with 'rec').
    /// </summary>
    [RegularExpression("^rec[a-zA-Z0-9]+$")]
    public required string RecordId { get; init; }
}
