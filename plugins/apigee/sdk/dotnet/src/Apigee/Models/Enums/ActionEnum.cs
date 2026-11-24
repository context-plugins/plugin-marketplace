using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Action to be performed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum ActionUnspecified = new("ACTION_UNSPECIFIED");

    public static readonly ActionEnum Upload = new("UPLOAD");

    public static readonly ActionEnum Delete = new("DELETE");

    public TResult Match<TResult>(Func<TResult> onActionUnspecified,
        Func<TResult> onUpload,
        Func<TResult> onDelete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ActionUnspecified => onActionUnspecified(),
            _ when this == Upload => onUpload(),
            _ when this == Delete => onDelete(),
            _ => otherwise(Value)
        };

    public void Match(Action onActionUnspecified, Action onUpload, Action onDelete, Action<string> otherwise)
    {
        if (this == ActionUnspecified) onActionUnspecified();
        else if (this == Upload) onUpload();
        else if (this == Delete) onDelete();
        else otherwise(Value);
    }
}
