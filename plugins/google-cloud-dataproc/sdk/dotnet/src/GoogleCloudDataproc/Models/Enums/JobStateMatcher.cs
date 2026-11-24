using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<JobStateMatcher>))]
public sealed record JobStateMatcher : OpenStringEnum<JobStateMatcher>
{
    private JobStateMatcher(string value) : base(value)
    {
    }

    public static readonly JobStateMatcher All = new("ALL");

    public static readonly JobStateMatcher Active = new("ACTIVE");

    public static readonly JobStateMatcher NonActive = new("NON_ACTIVE");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onActive,
        Func<TResult> onNonActive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Active => onActive(),
            _ when this == NonActive => onNonActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onActive, Action onNonActive, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Active) onActive();
        else if (this == NonActive) onNonActive();
        else otherwise(Value);
    }
}
