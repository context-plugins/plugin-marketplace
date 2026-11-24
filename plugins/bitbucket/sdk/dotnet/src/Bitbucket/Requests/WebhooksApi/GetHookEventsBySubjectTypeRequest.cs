using Bitbucket.Models.Enums;

namespace Bitbucket.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetHookEventsBySubjectType operation.
/// </summary>
public sealed record GetHookEventsBySubjectTypeRequest
{
    /// <summary>
    /// A resource or subject type.
    /// </summary>
    public required SubjectType1 SubjectType { get; init; }
}
