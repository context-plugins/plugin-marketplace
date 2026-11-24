using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The current state of the ApiHub instance.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State4ApigeeProjectsApi>))]
public sealed record State4ApigeeProjectsApi : OpenStringEnum<State4ApigeeProjectsApi>
{
    private State4ApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly State4ApigeeProjectsApi StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State4ApigeeProjectsApi Inactive = new("INACTIVE");

    public static readonly State4ApigeeProjectsApi Creating = new("CREATING");

    public static readonly State4ApigeeProjectsApi Active = new("ACTIVE");

    public static readonly State4ApigeeProjectsApi Updating = new("UPDATING");

    public static readonly State4ApigeeProjectsApi Deleting = new("DELETING");

    public static readonly State4ApigeeProjectsApi Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onInactive,
        Func<TResult> onCreating,
        Func<TResult> onActive,
        Func<TResult> onUpdating,
        Func<TResult> onDeleting,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Inactive => onInactive(),
            _ when this == Creating => onCreating(),
            _ when this == Active => onActive(),
            _ when this == Updating => onUpdating(),
            _ when this == Deleting => onDeleting(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onInactive,
        Action onCreating,
        Action onActive,
        Action onUpdating,
        Action onDeleting,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Inactive) onInactive();
        else if (this == Creating) onCreating();
        else if (this == Active) onActive();
        else if (this == Updating) onUpdating();
        else if (this == Deleting) onDeleting();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
