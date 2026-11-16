using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Specifies the type of resource identified in <c>linked_to</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LinkedType>))]
public sealed record LinkedType : OpenStringEnum<LinkedType>
{
    private LinkedType(string value) : base(value)
    {
    }

    public static readonly LinkedType Application = new("APPLICATION");

    public TResult Match<TResult>(Func<TResult> onApplication, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Application => onApplication(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplication, Action<string> otherwise)
    {
        if (this == Application) onApplication();
        else otherwise(Value);
    }
}
