using System;
using CircleCi.Models.Enums;

namespace CircleCi.Requests.Webhook;

/// <summary>
/// The inputs of the ListWebhooks operation.
/// </summary>
public sealed record ListWebhooksRequest
{
    /// <summary>
    /// The ID of the scope (project ID)
    /// </summary>
    public required Guid ScopeId { get; init; }

    /// <summary>
    /// The type of scope
    /// </summary>
    public required ScopeType ScopeType { get; init; }
}
