using System;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.GovernanceApi;

/// <summary>
/// The inputs of the GetApiV1GovernanceSummary operation.
/// </summary>
public sealed record GetApiV1GovernanceSummaryRequest
{
    public Guid? AiSystemId { get; init; }

    public Risk? Risk { get; init; }

    public string? Owner { get; init; }

    public string? Provider { get; init; }

    public string? DataClassification { get; init; }

    public string? Jurisdiction { get; init; }

    public string? Framework { get; init; }
}
