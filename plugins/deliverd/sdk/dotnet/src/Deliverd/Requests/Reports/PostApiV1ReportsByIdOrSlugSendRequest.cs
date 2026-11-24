using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PostApiV1ReportsByIdOrSlugSend operation.
/// </summary>
public sealed record PostApiV1ReportsByIdOrSlugSendRequest
{
    public required string IdOrSlug { get; init; }

    public ApiV1ReportsSendRequest? Body { get; init; }
}
