using System.ComponentModel.DataAnnotations;

namespace Airtable.Requests.WebhooksApi;

/// <summary>
/// The inputs of the ListWebhooks operation.
/// </summary>
public sealed record ListWebhooksRequest
{
    /// <summary>
    /// The unique identifier of the base (starts with 'app').
    /// </summary>
    [RegularExpression("^app[a-zA-Z0-9]+$")]
    public required string BaseId { get; init; }
}
