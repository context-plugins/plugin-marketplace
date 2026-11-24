using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayTransfersApi>))]
public sealed record EntityRazorpayTransfersApi : OpenStringEnum<EntityRazorpayTransfersApi>
{
    private EntityRazorpayTransfersApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayTransfersApi Reversal = new("reversal");

    public TResult Match<TResult>(Func<TResult> onReversal, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Reversal => onReversal(),
            _ => otherwise(Value)
        };

    public void Match(Action onReversal, Action<string> otherwise)
    {
        if (this == Reversal) onReversal();
        else otherwise(Value);
    }
}
