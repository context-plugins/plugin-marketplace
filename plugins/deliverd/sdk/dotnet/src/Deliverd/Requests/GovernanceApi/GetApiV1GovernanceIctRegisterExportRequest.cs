using System;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.GovernanceApi;

/// <summary>
/// The inputs of the GetApiV1GovernanceIctRegisterExport operation.
/// </summary>
public sealed record GetApiV1GovernanceIctRegisterExportRequest
{
    public Format? Format { get; init; }

    public Template? Template { get; init; }

    /// <summary>
    /// The reporting date; today when omitted
    /// </summary>
    public DateTimeOffset? AsOf { get; init; }
}
