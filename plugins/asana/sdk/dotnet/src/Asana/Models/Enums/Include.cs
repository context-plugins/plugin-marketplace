using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The elements that will be duplicated to the new project. Tasks are always included.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Include>))]
public sealed record Include : OpenStringEnum<Include>
{
    private Include(string value) : base(value)
    {
    }

    public static readonly Include Members = new("members");

    public static readonly Include Notes = new("notes");

    public static readonly Include Forms = new("forms");

    public static readonly Include TaskNotes = new("task_notes");

    public static readonly Include TaskAssignee = new("task_assignee");

    public static readonly Include TaskSubtasks = new("task_subtasks");

    public static readonly Include TaskAttachments = new("task_attachments");

    public static readonly Include TaskDates = new("task_dates");

    public static readonly Include TaskDependencies = new("task_dependencies");

    public static readonly Include TaskFollowers = new("task_followers");

    public static readonly Include TaskTags = new("task_tags");

    public static readonly Include TaskProjects = new("task_projects");

    public TResult Match<TResult>(Func<TResult> onMembers,
        Func<TResult> onNotes,
        Func<TResult> onForms,
        Func<TResult> onTaskNotes,
        Func<TResult> onTaskAssignee,
        Func<TResult> onTaskSubtasks,
        Func<TResult> onTaskAttachments,
        Func<TResult> onTaskDates,
        Func<TResult> onTaskDependencies,
        Func<TResult> onTaskFollowers,
        Func<TResult> onTaskTags,
        Func<TResult> onTaskProjects,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Members => onMembers(),
            _ when this == Notes => onNotes(),
            _ when this == Forms => onForms(),
            _ when this == TaskNotes => onTaskNotes(),
            _ when this == TaskAssignee => onTaskAssignee(),
            _ when this == TaskSubtasks => onTaskSubtasks(),
            _ when this == TaskAttachments => onTaskAttachments(),
            _ when this == TaskDates => onTaskDates(),
            _ when this == TaskDependencies => onTaskDependencies(),
            _ when this == TaskFollowers => onTaskFollowers(),
            _ when this == TaskTags => onTaskTags(),
            _ when this == TaskProjects => onTaskProjects(),
            _ => otherwise(Value)
        };

    public void Match(Action onMembers,
        Action onNotes,
        Action onForms,
        Action onTaskNotes,
        Action onTaskAssignee,
        Action onTaskSubtasks,
        Action onTaskAttachments,
        Action onTaskDates,
        Action onTaskDependencies,
        Action onTaskFollowers,
        Action onTaskTags,
        Action onTaskProjects,
        Action<string> otherwise)
    {
        if (this == Members) onMembers();
        else if (this == Notes) onNotes();
        else if (this == Forms) onForms();
        else if (this == TaskNotes) onTaskNotes();
        else if (this == TaskAssignee) onTaskAssignee();
        else if (this == TaskSubtasks) onTaskSubtasks();
        else if (this == TaskAttachments) onTaskAttachments();
        else if (this == TaskDates) onTaskDates();
        else if (this == TaskDependencies) onTaskDependencies();
        else if (this == TaskFollowers) onTaskFollowers();
        else if (this == TaskTags) onTaskTags();
        else if (this == TaskProjects) onTaskProjects();
        else otherwise(Value);
    }
}
