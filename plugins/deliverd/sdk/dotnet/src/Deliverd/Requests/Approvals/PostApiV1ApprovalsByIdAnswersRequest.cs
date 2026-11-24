using System;
using Deliverd.Models;

namespace Deliverd.Requests.Approvals;

/// <summary>
/// The inputs of the PostApiV1ApprovalsByIdAnswers operation.
/// </summary>
public sealed record PostApiV1ApprovalsByIdAnswersRequest
{
    public required Guid Id { get; init; }

    public ApiV1ApprovalsAnswersRequest? Body { get; init; }
}
