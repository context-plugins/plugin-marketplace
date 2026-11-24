using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The fields that will be duplicated to the new task.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IncludeAsanaTasksApi>))]
public sealed record IncludeAsanaTasksApi : OpenStringEnum<IncludeAsanaTasksApi>
{
    private IncludeAsanaTasksApi(string value) : base(value)
    {
    }

    public static readonly IncludeAsanaTasksApi Notes = new("notes");

    public static readonly IncludeAsanaTasksApi Assignee = new("assignee");

    public static readonly IncludeAsanaTasksApi Subtasks = new("subtasks");

    public static readonly IncludeAsanaTasksApi Attachments = new("attachments");

    public static readonly IncludeAsanaTasksApi Tags = new("tags");

    public static readonly IncludeAsanaTasksApi Followers = new("followers");

    public static readonly IncludeAsanaTasksApi Projects = new("projects");

    public static readonly IncludeAsanaTasksApi Dates = new("dates");

    public static readonly IncludeAsanaTasksApi Dependencies = new("dependencies");

    public static readonly IncludeAsanaTasksApi Parent = new("parent");

    public TResult Match<TResult>(Func<TResult> onNotes,
        Func<TResult> onAssignee,
        Func<TResult> onSubtasks,
        Func<TResult> onAttachments,
        Func<TResult> onTags,
        Func<TResult> onFollowers,
        Func<TResult> onProjects,
        Func<TResult> onDates,
        Func<TResult> onDependencies,
        Func<TResult> onParent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Notes => onNotes(),
            _ when this == Assignee => onAssignee(),
            _ when this == Subtasks => onSubtasks(),
            _ when this == Attachments => onAttachments(),
            _ when this == Tags => onTags(),
            _ when this == Followers => onFollowers(),
            _ when this == Projects => onProjects(),
            _ when this == Dates => onDates(),
            _ when this == Dependencies => onDependencies(),
            _ when this == Parent => onParent(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotes,
        Action onAssignee,
        Action onSubtasks,
        Action onAttachments,
        Action onTags,
        Action onFollowers,
        Action onProjects,
        Action onDates,
        Action onDependencies,
        Action onParent,
        Action<string> otherwise)
    {
        if (this == Notes) onNotes();
        else if (this == Assignee) onAssignee();
        else if (this == Subtasks) onSubtasks();
        else if (this == Attachments) onAttachments();
        else if (this == Tags) onTags();
        else if (this == Followers) onFollowers();
        else if (this == Projects) onProjects();
        else if (this == Dates) onDates();
        else if (this == Dependencies) onDependencies();
        else if (this == Parent) onParent();
        else otherwise(Value);
    }
}
