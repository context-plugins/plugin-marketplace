using System.ComponentModel.DataAnnotations;
using Airtable.Models;

namespace Airtable.Requests.Tables;

/// <summary>
/// The inputs of the CreateTable operation.
/// </summary>
public sealed record CreateTableOperationRequest
{
    /// <summary>
    /// The unique identifier of the base (starts with 'app').
    /// </summary>
    [RegularExpression("^app[a-zA-Z0-9]+$")]
    public required string BaseId { get; init; }

    public required CreateTableRequest Body { get; init; }
}
