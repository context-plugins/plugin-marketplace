using System;

namespace BrowserUse.Requests.ExtensionsApi;

/// <summary>
/// The inputs of the DeleteExtensionExtensionsExtensionIdDelete operation.
/// </summary>
public sealed record DeleteExtensionExtensionsExtensionIdDeleteRequest
{
    public required Guid ExtensionId { get; init; }
}
