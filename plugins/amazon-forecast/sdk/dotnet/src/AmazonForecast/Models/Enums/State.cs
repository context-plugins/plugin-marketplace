using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// Whether the reference predictor is Active or Deleted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Active = new("Active");

    public static readonly State Deleted = new("Deleted");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onDeleted, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDeleted, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
