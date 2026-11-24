using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ExpandRazorpayTransfersApi>))]
public sealed record ExpandRazorpayTransfersApi : OpenStringEnum<ExpandRazorpayTransfersApi>
{
    private ExpandRazorpayTransfersApi(string value) : base(value)
    {
    }

    public static readonly ExpandRazorpayTransfersApi RecipientSettlement = new("recipient_settlement");

    public TResult Match<TResult>(Func<TResult> onRecipientSettlement, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RecipientSettlement => onRecipientSettlement(),
            _ => otherwise(Value)
        };

    public void Match(Action onRecipientSettlement, Action<string> otherwise)
    {
        if (this == RecipientSettlement) onRecipientSettlement();
        else otherwise(Value);
    }
}
