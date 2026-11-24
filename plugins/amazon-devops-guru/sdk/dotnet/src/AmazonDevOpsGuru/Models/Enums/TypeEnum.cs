using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The type of the reactive anomaly. It can be one of the following types. CAUSAL - the anomaly can cause a new insight. CONTEXTUAL - the anomaly contains additional information about an insight or its causal anomaly.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Causal = new("CAUSAL");

    public static readonly TypeEnum Contextual = new("CONTEXTUAL");

    public TResult Match<TResult>(Func<TResult> onCausal,
        Func<TResult> onContextual,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Causal => onCausal(),
            _ when this == Contextual => onContextual(),
            _ => otherwise(Value)
        };

    public void Match(Action onCausal, Action onContextual, Action<string> otherwise)
    {
        if (this == Causal) onCausal();
        else if (this == Contextual) onContextual();
        else otherwise(Value);
    }
}
