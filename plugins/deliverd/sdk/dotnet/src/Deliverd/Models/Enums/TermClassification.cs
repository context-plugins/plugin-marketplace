using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// With counts: the strictest classification among the terms found
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TermClassification>))]
public sealed record TermClassification : OpenStringEnum<TermClassification>
{
    private TermClassification(string value) : base(value)
    {
    }

    public static readonly TermClassification Confidential = new("confidential");

    public static readonly TermClassification Restricted = new("restricted");

    public TResult Match<TResult>(Func<TResult> onConfidential,
        Func<TResult> onRestricted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Confidential => onConfidential(),
            _ when this == Restricted => onRestricted(),
            _ => otherwise(Value)
        };

    public void Match(Action onConfidential, Action onRestricted, Action<string> otherwise)
    {
        if (this == Confidential) onConfidential();
        else if (this == Restricted) onRestricted();
        else otherwise(Value);
    }
}
