using System;

namespace Hud.Requests.Imports;

/// <summary>
/// The inputs of the GetImportV2ImportsImportIdGet operation.
/// </summary>
public sealed record GetImportV2ImportsImportIdGetRequest
{
    public required Guid ImportId { get; init; }
}
