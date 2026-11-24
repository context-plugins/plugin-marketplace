using System;

namespace Hud.Requests.Imports;

/// <summary>
/// The inputs of the CancelImportV2ImportsImportIdCancelPost operation.
/// </summary>
public sealed record CancelImportV2ImportsImportIdCancelPostRequest
{
    public required Guid ImportId { get; init; }
}
