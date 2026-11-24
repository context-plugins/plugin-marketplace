using System;
using Hud.Core.Validation.Attributes;
using Hud.Models.Enums;

namespace Hud.Requests.Checks;

/// <summary>
/// The inputs of the ListPlatformCheckRunsV2ChecksRunsGet operation.
/// </summary>
public sealed record ListPlatformCheckRunsV2ChecksRunsGetRequest
{
    public required CheckSubjectType SubjectType { get; init; }

    public required Guid SubjectId { get; init; }

    [Minimum(1)]
    [Maximum(500)]
    public int Limit { get; init; } = 50;
}
