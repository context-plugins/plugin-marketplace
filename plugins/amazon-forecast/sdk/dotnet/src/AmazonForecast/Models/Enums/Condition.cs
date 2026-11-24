using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The condition to apply. To include the objects that match the statement, specify IS. To exclude matching objects, specify IS_NOT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Condition>))]
public sealed record Condition : OpenStringEnum<Condition>
{
    private Condition(string value) : base(value)
    {
    }

    public static readonly Condition IsMember = new("IS");

    public static readonly Condition IsNot = new("IS_NOT");

    public TResult Match<TResult>(Func<TResult> onIsMember, Func<TResult> onIsNot, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IsMember => onIsMember(),
            _ when this == IsNot => onIsNot(),
            _ => otherwise(Value)
        };

    public void Match(Action onIsMember, Action onIsNot, Action<string> otherwise)
    {
        if (this == IsMember) onIsMember();
        else if (this == IsNot) onIsNot();
        else otherwise(Value);
    }
}
