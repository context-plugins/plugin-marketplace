using System;
using System.Collections.Generic;

namespace Asana.Requests.Tasks;

/// <summary>
/// The inputs of the GetTasks operation.
/// </summary>
public sealed record GetTasksRequest
{
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
    /// Results per page.
    /// The number of objects to return per page. The value must be between 1 and 100.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Offset token.
    /// An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
    /// 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    /// </summary>
    public string? Offset { get; init; }

    /// <summary>
    /// The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified.
    /// *Note: If you specify <c>assignee</c>, you must also specify the <c>workspace</c> to filter on.*
    /// </summary>
    public string? Assignee { get; init; }

    /// <summary>
    /// The project to filter tasks on.
    /// </summary>
    public string? Project { get; init; }

    /// <summary>
    /// The section to filter tasks on.
    /// *Note: Currently, this is only supported in board views.*
    /// </summary>
    public string? Section { get; init; }

    /// <summary>
    /// The workspace to filter tasks on.
    /// *Note: If you specify <c>workspace</c>, you must also specify the <c>assignee</c> to filter on.*
    /// </summary>
    public string? Workspace { get; init; }

    /// <summary>
    /// Only return tasks that are either incomplete or that have been completed since this time.
    /// </summary>
    public DateTimeOffset? CompletedSince { get; init; }

    /// <summary>
    /// Only return tasks that have been modified since the given time.
    /// <para>
    /// *Note: A task is considered “modified” if any of its properties
    /// change, or associations between it and other objects are modified
    /// (e.g.  a task being added to a project). A task is not considered
    /// modified just because another object it is associated with (e.g. a
    /// subtask) is modified. Actions that count as modifying the task
    /// include assigning, renaming, completing, and adding stories.*
    /// </para>
    /// </summary>
    public DateTimeOffset? ModifiedSince { get; init; }
}
