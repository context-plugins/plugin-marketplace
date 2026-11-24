using System;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Enum;

namespace SalesforceServiceCloud.Models.Enums;

/// <summary>
/// Health status of Einstein Bots API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Up = new("UP");

    public static readonly Status1 Down = new("DOWN");

    public TResult Match<TResult>(Func<TResult> onUp, Func<TResult> onDown, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Up => onUp(),
            _ when this == Down => onDown(),
            _ => otherwise(Value)
        };

    public void Match(Action onUp, Action onDown, Action<string> otherwise)
    {
        if (this == Up) onUp();
        else if (this == Down) onDown();
        else otherwise(Value);
    }
}
