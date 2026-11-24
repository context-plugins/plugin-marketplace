using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Action4>))]
public sealed record Action4 : OpenStringEnum<Action4>
{
    private Action4(string value) : base(value)
    {
    }

    public static readonly Action4 React = new("REACT");

    public static readonly Action4 Unreact = new("UNREACT");

    public TResult Match<TResult>(Func<TResult> onReact, Func<TResult> onUnreact, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == React => onReact(),
            _ when this == Unreact => onUnreact(),
            _ => otherwise(Value)
        };

    public void Match(Action onReact, Action onUnreact, Action<string> otherwise)
    {
        if (this == React) onReact();
        else if (this == Unreact) onUnreact();
        else otherwise(Value);
    }
}
