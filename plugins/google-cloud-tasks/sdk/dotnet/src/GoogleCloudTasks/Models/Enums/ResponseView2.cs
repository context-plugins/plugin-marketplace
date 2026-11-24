using System;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Enum;

namespace GoogleCloudTasks.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResponseView2>))]
public sealed record ResponseView2 : OpenStringEnum<ResponseView2>
{
    private ResponseView2(string value) : base(value)
    {
    }

    public static readonly ResponseView2 ViewUnspecified = new("VIEW_UNSPECIFIED");

    public static readonly ResponseView2 Basic = new("BASIC");

    public static readonly ResponseView2 Full = new("FULL");

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
