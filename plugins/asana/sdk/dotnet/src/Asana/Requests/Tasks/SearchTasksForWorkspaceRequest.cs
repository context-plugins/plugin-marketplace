using System;
using System.Collections.Generic;
using Asana.Models.Enums;

namespace Asana.Requests.Tasks;

/// <summary>
/// The inputs of the SearchTasksForWorkspace operation.
/// </summary>
public sealed record SearchTasksForWorkspaceRequest
{
    /// <summary>
    /// Globally unique identifier for the workspace or organization.
    /// </summary>
    public required string WorkspaceGid { get; init; }

    /// <summary>
    /// Provides “pretty” output.
    /// Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    /// </summary>
    public bool? OptPretty { get; init; }

    /// <summary>
    /// Defines fields to return.
    /// Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
    /// The id of included objects will always be returned, regardless of the field options.
    /// </summary>
    public IReadOnlyList<string>? OptFields { get; init; }

    /// <summary>
    /// Performs full-text search on both task name and description
    /// </summary>
    public string? Text { get; init; }

    /// <summary>
    /// Filters results by the task's resource_subtype
    /// </summary>
    public ResourceSubtype2AsanaTasksApi ResourceSubtype { get; init; } = ResourceSubtype2AsanaTasksApi.Milestone;

    /// <summary>
    /// Comma-separated list of user identifiers
    /// </summary>
    public string? AssigneeAny { get; init; }

    /// <summary>
    /// Comma-separated list of user identifiers
    /// </summary>
    public string? AssigneeNot { get; init; }

    /// <summary>
    /// Comma-separated list of portfolio IDs
    /// </summary>
    public string? PortfoliosAny { get; init; }

    /// <summary>
    /// Comma-separated list of project IDs
    /// </summary>
    public string? ProjectsAny { get; init; }

    /// <summary>
    /// Comma-separated list of project IDs
    /// </summary>
    public string? ProjectsNot { get; init; }

    /// <summary>
    /// Comma-separated list of project IDs
    /// </summary>
    public string? ProjectsAll { get; init; }

    /// <summary>
    /// Comma-separated list of section or column IDs
    /// </summary>
    public string? SectionsAny { get; init; }

    /// <summary>
    /// Comma-separated list of section or column IDs
    /// </summary>
    public string? SectionsNot { get; init; }

    /// <summary>
    /// Comma-separated list of section or column IDs
    /// </summary>
    public string? SectionsAll { get; init; }

    /// <summary>
    /// Comma-separated list of tag IDs
    /// </summary>
    public string? TagsAny { get; init; }

    /// <summary>
    /// Comma-separated list of tag IDs
    /// </summary>
    public string? TagsNot { get; init; }

    /// <summary>
    /// Comma-separated list of tag IDs
    /// </summary>
    public string? TagsAll { get; init; }

    /// <summary>
    /// Comma-separated list of team IDs
    /// </summary>
    public string? TeamsAny { get; init; }

    /// <summary>
    /// Comma-separated list of user identifiers
    /// </summary>
    public string? FollowersNot { get; init; }

    /// <summary>
    /// Comma-separated list of user identifiers
    /// </summary>
    public string? CreatedByAny { get; init; }

    /// <summary>
    /// Comma-separated list of user identifiers
    /// </summary>
    public string? CreatedByNot { get; init; }

    /// <summary>
    /// Comma-separated list of user identifiers
    /// </summary>
    public string? AssignedByAny { get; init; }

    /// <summary>
    /// Comma-separated list of user identifiers
    /// </summary>
    public string? AssignedByNot { get; init; }

    /// <summary>
    /// Comma-separated list of user identifiers
    /// </summary>
    public string? LikedByNot { get; init; }

    /// <summary>
    /// Comma-separated list of user identifiers
    /// </summary>
    public string? CommentedOnByNot { get; init; }

    /// <summary>
    /// ISO 8601 date string
    /// </summary>
    public DateTimeOffset? DueOnBefore { get; init; }

    /// <summary>
    /// ISO 8601 date string
    /// </summary>
    public DateTimeOffset? DueOnAfter { get; init; }

    /// <summary>
    /// ISO 8601 date string or <c>null</c>
    /// </summary>
    public DateTimeOffset? DueOn { get; init; }

    /// <summary>
    /// ISO 8601 datetime string
    /// </summary>
    public DateTimeOffset? DueAtBefore { get; init; }

    /// <summary>
    /// ISO 8601 datetime string
    /// </summary>
    public DateTimeOffset? DueAtAfter { get; init; }

    /// <summary>
    /// ISO 8601 date string
    /// </summary>
    public DateTimeOffset? StartOnBefore { get; init; }

    /// <summary>
    /// ISO 8601 date string
    /// </summary>
    public DateTimeOffset? StartOnAfter { get; init; }

    /// <summary>
    /// ISO 8601 date string or <c>null</c>
    /// </summary>
    public DateTimeOffset? StartOn { get; init; }

    /// <summary>
    /// ISO 8601 date string
    /// </summary>
    public DateTimeOffset? CreatedOnBefore { get; init; }

    /// <summary>
    /// ISO 8601 date string
    /// </summary>
    public DateTimeOffset? CreatedOnAfter { get; init; }

    /// <summary>
    /// ISO 8601 date string or <c>null</c>
    /// </summary>
    public DateTimeOffset? CreatedOn { get; init; }

    /// <summary>
    /// ISO 8601 datetime string
    /// </summary>
    public DateTimeOffset? CreatedAtBefore { get; init; }

    /// <summary>
    /// ISO 8601 datetime string
    /// </summary>
    public DateTimeOffset? CreatedAtAfter { get; init; }

    /// <summary>
    /// ISO 8601 date string
    /// </summary>
    public DateTimeOffset? CompletedOnBefore { get; init; }

    /// <summary>
    /// ISO 8601 date string
    /// </summary>
    public DateTimeOffset? CompletedOnAfter { get; init; }

    /// <summary>
    /// ISO 8601 date string or <c>null</c>
    /// </summary>
    public DateTimeOffset? CompletedOn { get; init; }

    /// <summary>
    /// ISO 8601 datetime string
    /// </summary>
    public DateTimeOffset? CompletedAtBefore { get; init; }

    /// <summary>
    /// ISO 8601 datetime string
    /// </summary>
    public DateTimeOffset? CompletedAtAfter { get; init; }

    /// <summary>
    /// ISO 8601 date string
    /// </summary>
    public DateTimeOffset? ModifiedOnBefore { get; init; }

    /// <summary>
    /// ISO 8601 date string
    /// </summary>
    public DateTimeOffset? ModifiedOnAfter { get; init; }

    /// <summary>
    /// ISO 8601 date string or <c>null</c>
    /// </summary>
    public DateTimeOffset? ModifiedOn { get; init; }

    /// <summary>
    /// ISO 8601 datetime string
    /// </summary>
    public DateTimeOffset? ModifiedAtBefore { get; init; }

    /// <summary>
    /// ISO 8601 datetime string
    /// </summary>
    public DateTimeOffset? ModifiedAtAfter { get; init; }

    /// <summary>
    /// Filter to incomplete tasks with dependents
    /// </summary>
    public bool? IsBlocking { get; init; }

    /// <summary>
    /// Filter to tasks with incomplete dependencies
    /// </summary>
    public bool? IsBlocked { get; init; }

    /// <summary>
    /// Filter to tasks with attachments
    /// </summary>
    public bool? HasAttachment { get; init; }

    /// <summary>
    /// Filter to completed tasks
    /// </summary>
    public bool? Completed { get; init; }

    /// <summary>
    /// Filter to subtasks
    /// </summary>
    public bool? IsSubtask { get; init; }

    /// <summary>
    /// One of <c>due_date</c>, <c>created_at</c>, <c>completed_at</c>, <c>likes</c>, or <c>modified_at</c>, defaults to <c>modified_at</c>
    /// </summary>
    public SortBy SortBy { get; init; } = SortBy.ModifiedAt;

    /// <summary>
    /// Default <c>false</c>
    /// </summary>
    public bool SortAscending { get; init; } = false;
}
