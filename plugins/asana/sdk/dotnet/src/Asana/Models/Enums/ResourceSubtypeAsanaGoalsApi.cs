using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResourceSubtypeAsanaGoalsApi>))]
public sealed record ResourceSubtypeAsanaGoalsApi : OpenStringEnum<ResourceSubtypeAsanaGoalsApi>
{
    private ResourceSubtypeAsanaGoalsApi(string value) : base(value)
    {
    }

    public static readonly ResourceSubtypeAsanaGoalsApi Number = new("number");

    public TResult Match<TResult>(Func<TResult> onNumber, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Number => onNumber(),
            _ => otherwise(Value)
        };

    public void Match(Action onNumber, Action<string> otherwise)
    {
        if (this == Number) onNumber();
        else otherwise(Value);
    }
}
