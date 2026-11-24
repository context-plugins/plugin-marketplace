using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// The generator of the FindAll run.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Generator>))]
public sealed record Generator : OpenStringEnum<Generator>
{
    private Generator(string value) : base(value)
    {
    }

    public static readonly Generator Base = new("base");

    public static readonly Generator Core = new("core");

    public static readonly Generator Pro = new("pro");

    public static readonly Generator Preview = new("preview");

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
