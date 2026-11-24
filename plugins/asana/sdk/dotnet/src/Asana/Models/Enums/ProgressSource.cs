using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// This field defines how the progress value of a goal metric is being calculated. A goal's progress can be provided manually by the user, calculated automatically from contributing subgoals or projects, or managed by an integration with an external data source, such as Salesforce.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ProgressSource>))]
public sealed record ProgressSource : OpenStringEnum<ProgressSource>
{
    private ProgressSource(string value) : base(value)
    {
    }

    public static readonly ProgressSource Manual = new("manual");

    public static readonly ProgressSource SubgoalProgress = new("subgoal_progress");

    public static readonly ProgressSource ProjectTaskCompletion = new("project_task_completion");

    public static readonly ProgressSource ProjectMilestoneCompletion = new("project_milestone_completion");

    public static readonly ProgressSource External = new("external");

    public TResult Match<TResult>(Func<TResult> onManual,
        Func<TResult> onSubgoalProgress,
        Func<TResult> onProjectTaskCompletion,
        Func<TResult> onProjectMilestoneCompletion,
        Func<TResult> onExternal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Manual => onManual(),
            _ when this == SubgoalProgress => onSubgoalProgress(),
            _ when this == ProjectTaskCompletion => onProjectTaskCompletion(),
            _ when this == ProjectMilestoneCompletion => onProjectMilestoneCompletion(),
            _ when this == External => onExternal(),
            _ => otherwise(Value)
        };

    public void Match(Action onManual,
        Action onSubgoalProgress,
        Action onProjectTaskCompletion,
        Action onProjectMilestoneCompletion,
        Action onExternal,
        Action<string> otherwise)
    {
        if (this == Manual) onManual();
        else if (this == SubgoalProgress) onSubgoalProgress();
        else if (this == ProjectTaskCompletion) onProjectTaskCompletion();
        else if (this == ProjectMilestoneCompletion) onProjectMilestoneCompletion();
        else if (this == External) onExternal();
        else otherwise(Value);
    }
}
