using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Recipe status, derived from its results and whether it is dismissed. Absent when unavailable.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDoiTComposerInsightsBetaApi>))]
public sealed record StatusDoiTComposerInsightsBetaApi : OpenStringEnum<StatusDoiTComposerInsightsBetaApi>
{
    private StatusDoiTComposerInsightsBetaApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTComposerInsightsBetaApi Active = new("active");

    public static readonly StatusDoiTComposerInsightsBetaApi Resolved = new("resolved");

    public static readonly StatusDoiTComposerInsightsBetaApi Dismissed = new("dismissed");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onResolved,
        Func<TResult> onDismissed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Resolved => onResolved(),
            _ when this == Dismissed => onDismissed(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onResolved, Action onDismissed, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Resolved) onResolved();
        else if (this == Dismissed) onDismissed();
        else otherwise(Value);
    }
}
