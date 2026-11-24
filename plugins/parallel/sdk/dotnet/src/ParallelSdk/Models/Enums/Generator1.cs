using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Generator for the FindAll run.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Generator1>))]
public sealed record Generator1 : OpenStringEnum<Generator1>
{
    private Generator1(string value) : base(value)
    {
    }

    public static readonly Generator1 Base = new("base");

    public static readonly Generator1 Core = new("core");

    public static readonly Generator1 Pro = new("pro");

    public static readonly Generator1 Preview = new("preview");

    public TResult Match<TResult>(Func<TResult> onBase,
        Func<TResult> onCore,
        Func<TResult> onPro,
        Func<TResult> onPreview,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Base => onBase(),
            _ when this == Core => onCore(),
            _ when this == Pro => onPro(),
            _ when this == Preview => onPreview(),
            _ => otherwise(Value)
        };

    public void Match(Action onBase, Action onCore, Action onPro, Action onPreview, Action<string> otherwise)
    {
        if (this == Base) onBase();
        else if (this == Core) onCore();
        else if (this == Pro) onPro();
        else if (this == Preview) onPreview();
        else otherwise(Value);
    }
}
