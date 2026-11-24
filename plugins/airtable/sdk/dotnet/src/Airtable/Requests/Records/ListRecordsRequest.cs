using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Airtable.Core.Validation.Attributes;
using Airtable.Models;
using Airtable.Models.Enums;

namespace Airtable.Requests.Records;

/// <summary>
/// The inputs of the ListRecords operation.
/// </summary>
public sealed record ListRecordsRequest
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
    /// Only return data for the specified field names or IDs.
    /// </summary>
    public IReadOnlyList<string>? Fields { get; init; }

    /// <summary>
    /// An Airtable formula used to filter records. The formula is evaluated for each record, and if the result is not 0, false, "", NaN, [], or #Error!, the record will be included in the response.
    /// </summary>
    public string? FilterByFormula { get; init; }

    /// <summary>
    /// The maximum total number of records that will be returned.
    /// </summary>
    [Minimum(1)]
    public int? MaxRecords { get; init; }

    /// <summary>
    /// The number of records returned in each request. Must be less than or equal to 100. Default is 100.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PageSize { get; init; } = 100;

    /// <summary>
    /// A list of sort objects that specifies how the records will be ordered. Each sort object must have a field key and an optional direction key (asc or desc).
    /// </summary>
    public IReadOnlyList<Sort>? Sort { get; init; }

    /// <summary>
    /// The name or ID of a view in the table. If set, only the records in that view will be returned.
    /// </summary>
    public string? View { get; init; }

    /// <summary>
    /// The format that should be used for cell values. Supported values are json (default) and string.
    /// </summary>
    public CellFormat? CellFormat { get; init; }

    /// <summary>
    /// The time zone to use for formatting dates when using string cell format.
    /// </summary>
    public string? TimeZone { get; init; }

    /// <summary>
    /// The user locale to use for formatting dates when using string cell format.
    /// </summary>
    public string? UserLocale { get; init; }

    /// <summary>
    /// If true, the response will use field IDs as object keys instead of field names.
    /// </summary>
    public bool? ReturnFieldsByFieldId { get; init; }

    /// <summary>
    /// A pagination cursor returned from a previous request. Pass this value to fetch the next page of results.
    /// </summary>
    public string? Offset { get; init; }
}
