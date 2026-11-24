using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind12>))]
public sealed record Kind12 : OpenStringEnum<Kind12>
{
    private Kind12(string value) : base(value)
    {
    }

    public static readonly Kind12 DependsOn = new("depends_on");

    public static readonly Kind12 Blocks = new("blocks");

    public static readonly Kind12 RelatedTo = new("related_to");

    public static readonly Kind12 Supersedes = new("supersedes");

    public static readonly Kind12 ResultedIn = new("resulted_in");

    public TResult Match<TResult>(Func<TResult> onDependsOn,
        Func<TResult> onBlocks,
        Func<TResult> onRelatedTo,
        Func<TResult> onSupersedes,
        Func<TResult> onResultedIn,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DependsOn => onDependsOn(),
            _ when this == Blocks => onBlocks(),
            _ when this == RelatedTo => onRelatedTo(),
            _ when this == Supersedes => onSupersedes(),
            _ when this == ResultedIn => onResultedIn(),
            _ => otherwise(Value)
        };

    public void Match(Action onDependsOn,
        Action onBlocks,
        Action onRelatedTo,
        Action onSupersedes,
        Action onResultedIn,
        Action<string> otherwise)
    {
        if (this == DependsOn) onDependsOn();
        else if (this == Blocks) onBlocks();
        else if (this == RelatedTo) onRelatedTo();
        else if (this == Supersedes) onSupersedes();
        else if (this == ResultedIn) onResultedIn();
        else otherwise(Value);
    }
}
