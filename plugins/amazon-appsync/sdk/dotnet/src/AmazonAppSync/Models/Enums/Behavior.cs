using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The behavior for the handler.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Behavior>))]
public sealed record Behavior : OpenStringEnum<Behavior>
{
    private Behavior(string value) : base(value)
    {
    }

    public static readonly Behavior Code = new("CODE");

    public static readonly Behavior Direct = new("DIRECT");

    public TResult Match<TResult>(Func<TResult> onCode, Func<TResult> onDirect, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Code => onCode(),
            _ when this == Direct => onDirect(),
            _ => otherwise(Value)
        };

    public void Match(Action onCode, Action onDirect, Action<string> otherwise)
    {
        if (this == Code) onCode();
        else if (this == Direct) onDirect();
        else otherwise(Value);
    }
}
