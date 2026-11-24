using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Created = new("created");

    public static readonly Status1 Initiated = new("initiated");

    public static readonly Status1 Processed = new("processed");

    public static readonly Status1 Reversed = new("reversed");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onInitiated,
        Func<TResult> onProcessed,
        Func<TResult> onReversed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Initiated => onInitiated(),
            _ when this == Processed => onProcessed(),
            _ when this == Reversed => onReversed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onInitiated,
        Action onProcessed,
        Action onReversed,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Initiated) onInitiated();
        else if (this == Processed) onProcessed();
        else if (this == Reversed) onReversed();
        else otherwise(Value);
    }
}
