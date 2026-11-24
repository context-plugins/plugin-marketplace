using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ExpandRazorpayInstantSettlementsApi>))]
public sealed record ExpandRazorpayInstantSettlementsApi : OpenStringEnum<ExpandRazorpayInstantSettlementsApi>
{
    private ExpandRazorpayInstantSettlementsApi(string value) : base(value)
    {
    }

    public static readonly ExpandRazorpayInstantSettlementsApi OndemandPayouts = new("ondemand_payouts");

    public TResult Match<TResult>(Func<TResult> onOndemandPayouts, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OndemandPayouts => onOndemandPayouts(),
            _ => otherwise(Value)
        };

    public void Match(Action onOndemandPayouts, Action<string> otherwise)
    {
        if (this == OndemandPayouts) onOndemandPayouts();
        else otherwise(Value);
    }
}
