using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Perigon.Requests.Utilities;

/// <summary>
/// The inputs of the GetLimits operation.
/// </summary>
public sealed record GetLimitsRequest
{
    /// <summary>
    /// Optional list of API keys whose validity and status should be checked. Each key is reported as valid only if it exists and belongs to your account.
    /// </summary>
    [MinLength(0)]
    [MaxLength(50)]
    public IReadOnlyList<string>? ApiKeys { get; init; }
}
