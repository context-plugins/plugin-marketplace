using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusRazorpayInstantSettlementsApi>))]
public sealed record StatusRazorpayInstantSettlementsApi : OpenStringEnum<StatusRazorpayInstantSettlementsApi>
{
    private StatusRazorpayInstantSettlementsApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayInstantSettlementsApi Created = new("created");

    public static readonly StatusRazorpayInstantSettlementsApi Initiated = new("initiated");

    public static readonly StatusRazorpayInstantSettlementsApi PartiallyProcessed = new("partially_processed");

    public static readonly StatusRazorpayInstantSettlementsApi Processed = new("processed");

    public static readonly StatusRazorpayInstantSettlementsApi Reversed = new("reversed");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onInitiated,
        Func<TResult> onPartiallyProcessed,
        Func<TResult> onProcessed,
        Func<TResult> onReversed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Initiated => onInitiated(),
            _ when this == PartiallyProcessed => onPartiallyProcessed(),
            _ when this == Processed => onProcessed(),
            _ when this == Reversed => onReversed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onInitiated,
        Action onPartiallyProcessed,
        Action onProcessed,
        Action onReversed,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Initiated) onInitiated();
        else if (this == PartiallyProcessed) onPartiallyProcessed();
        else if (this == Processed) onProcessed();
        else if (this == Reversed) onReversed();
        else otherwise(Value);
    }
}
