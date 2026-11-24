using System;

namespace MicrosoftDynamicsNav.Requests.ExtensionsApi;

/// <summary>
/// The inputs of the ListExtensions operation.
/// </summary>
public sealed record ListExtensionsRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
