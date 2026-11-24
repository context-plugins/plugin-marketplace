using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Capability>))]
public sealed record Capability : OpenStringEnum<Capability>
{
    private Capability(string value) : base(value)
    {
    }

    public static readonly Capability View = new("view");

    public static readonly Capability Comment = new("comment");

    public TResult Match<TResult>(Func<TResult> onView, Func<TResult> onComment, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == View => onView(),
            _ when this == Comment => onComment(),
            _ => otherwise(Value)
        };

    public void Match(Action onView, Action onComment, Action<string> otherwise)
    {
        if (this == View) onView();
        else if (this == Comment) onComment();
        else otherwise(Value);
    }
}
