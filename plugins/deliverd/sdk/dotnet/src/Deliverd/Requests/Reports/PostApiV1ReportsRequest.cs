using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PostApiV1Reports operation.
/// </summary>
public sealed record PostApiV1ReportsRequest
{
    public ApiV1ReportsRequest? Body { get; init; }
}
