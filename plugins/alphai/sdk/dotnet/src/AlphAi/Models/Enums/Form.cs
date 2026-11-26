using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Form>))]
public sealed record Form : OpenStringEnum<Form>
{
    private Form(string value) : base(value)
    {
    }

    public static readonly Form _8K = new("8-K");

    public static readonly Form _6K = new("6-K");

    public TResult Match<TResult>(Func<TResult> on_8K, Func<TResult> on_6K, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _8K => on_8K(),
            _ when this == _6K => on_6K(),
            _ => otherwise(Value)
        };

    public void Match(Action on_8K, Action on_6K, Action<string> otherwise)
    {
        if (this == _8K) on_8K();
        else if (this == _6K) on_6K();
        else otherwise(Value);
    }
}
