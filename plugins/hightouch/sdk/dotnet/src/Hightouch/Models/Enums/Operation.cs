using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// <c>create</c> publishes a new sync, <c>update</c> changes an existing one
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operation>))]
public sealed record Operation : OpenStringEnum<Operation>
{
    private Operation(string value) : base(value)
    {
    }

    public static readonly Operation Create = new("create");

    public static readonly Operation Update = new("update");

    public TResult Match<TResult>(Func<TResult> onCreate, Func<TResult> onUpdate, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Create => onCreate(),
            _ when this == Update => onUpdate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreate, Action onUpdate, Action<string> otherwise)
    {
        if (this == Create) onCreate();
        else if (this == Update) onUpdate();
        else otherwise(Value);
    }
}
