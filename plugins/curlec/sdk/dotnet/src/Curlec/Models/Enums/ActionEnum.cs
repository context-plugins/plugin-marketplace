using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// draft: save evidence without submitting. submit: send for bank review. Minimum one document required for submit.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum Draft = new("draft");

    public static readonly ActionEnum Submit = new("submit");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<TResult> onSubmit, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Submit => onSubmit(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onSubmit, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Submit) onSubmit();
        else otherwise(Value);
    }
}
