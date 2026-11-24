using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// The type of plan
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType>))]
public sealed record PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType : OpenStringEnum<PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType>
{
    private PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType(string value) : base(value)
    {
    }

    public static readonly PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType Flat = new("flat");

    public static readonly PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType Usage = new("usage");

    public static readonly PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType Credit = new("credit");

    public TResult Match<TResult>(Func<TResult> onFlat,
        Func<TResult> onUsage,
        Func<TResult> onCredit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Flat => onFlat(),
            _ when this == Usage => onUsage(),
            _ when this == Credit => onCredit(),
            _ => otherwise(Value)
        };

    public void Match(Action onFlat, Action onUsage, Action onCredit, Action<string> otherwise)
    {
        if (this == Flat) onFlat();
        else if (this == Usage) onUsage();
        else if (this == Credit) onCredit();
        else otherwise(Value);
    }
}
