using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity1RazorpayTransfersApi>))]
public sealed record Entity1RazorpayTransfersApi : OpenStringEnum<Entity1RazorpayTransfersApi>
{
    private Entity1RazorpayTransfersApi(string value) : base(value)
    {
    }

    public static readonly Entity1RazorpayTransfersApi Transfer = new("transfer");

    public TResult Match<TResult>(Func<TResult> onTransfer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Transfer => onTransfer(),
            _ => otherwise(Value)
        };

    public void Match(Action onTransfer, Action<string> otherwise)
    {
        if (this == Transfer) onTransfer();
        else otherwise(Value);
    }
}
