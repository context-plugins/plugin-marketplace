using System;

namespace BrowserUse.Requests.ExtensionsApi;

/// <summary>
/// The inputs of the GetExtensionExtensionsExtensionIdGet operation.
/// </summary>
public sealed record GetExtensionExtensionsExtensionIdGetRequest
{
    public required Guid ExtensionId { get; init; }
}
