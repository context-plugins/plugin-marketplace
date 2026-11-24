using System;

namespace Hud.Requests.Imports;

/// <summary>
/// The inputs of the GetImportReportV2ImportsImportIdReportGet operation.
/// </summary>
public sealed record GetImportReportV2ImportsImportIdReportGetRequest
{
    public required Guid ImportId { get; init; }
}
