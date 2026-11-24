using System;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.Knowledge;

/// <summary>
/// The inputs of the GetApiV1KnowledgeExport operation.
/// </summary>
public sealed record GetApiV1KnowledgeExportRequest
{
    public FormatDeliverdDevKnowledgeApi? Format { get; init; }

    public StatusDeliverdDevKnowledgeApi? Status { get; init; }

    public Guid? WorkspaceId { get; init; }
}
