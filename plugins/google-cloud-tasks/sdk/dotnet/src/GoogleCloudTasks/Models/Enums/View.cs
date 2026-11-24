using System;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Enum;

namespace GoogleCloudTasks.Models.Enums;

/// <summary>
/// Output only. The view specifies which subset of the Task has been returned.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<View>))]
public sealed record View : OpenStringEnum<View>
{
    private View(string value) : base(value)
    {
    }

    public static readonly View ViewUnspecified = new("VIEW_UNSPECIFIED");

    public static readonly View Basic = new("BASIC");

    public static readonly View Full = new("FULL");

    public TResult Match<TResult>(Func<TResult> onViewUnspecified,
        Func<TResult> onBasic,
        Func<TResult> onFull,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ViewUnspecified => onViewUnspecified(),
            _ when this == Basic => onBasic(),
            _ when this == Full => onFull(),
            _ => otherwise(Value)
        };

    public void Match(Action onViewUnspecified, Action onBasic, Action onFull, Action<string> otherwise)
    {
        if (this == ViewUnspecified) onViewUnspecified();
        else if (this == Basic) onBasic();
        else if (this == Full) onFull();
        else otherwise(Value);
    }
}
