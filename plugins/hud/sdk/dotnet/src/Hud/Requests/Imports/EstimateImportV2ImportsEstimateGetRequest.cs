using System;
using Hud.Models.Enums;

namespace Hud.Requests.Imports;

/// <summary>
/// The inputs of the EstimateImportV2ImportsEstimateGet operation.
/// </summary>
public sealed record EstimateImportV2ImportsEstimateGetRequest
{
    public required Format Format { get; init; }

    public required Guid FileId { get; init; }
}
