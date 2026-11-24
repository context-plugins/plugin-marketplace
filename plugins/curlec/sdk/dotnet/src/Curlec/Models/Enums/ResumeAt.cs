using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// When to resume. Currently only 'now' is supported.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResumeAt>))]
public sealed record ResumeAt : OpenStringEnum<ResumeAt>
{
    private ResumeAt(string value) : base(value)
    {
    }

    public static readonly ResumeAt Now = new("now");

    public TResult Match<TResult>(Func<TResult> onNow, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Now => onNow(),
            _ => otherwise(Value)
        };

    public void Match(Action onNow, Action<string> otherwise)
    {
        if (this == Now) onNow();
        else otherwise(Value);
    }
}
