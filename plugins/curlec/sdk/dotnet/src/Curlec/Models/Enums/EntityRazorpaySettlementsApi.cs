using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpaySettlementsApi>))]
public sealed record EntityRazorpaySettlementsApi : OpenStringEnum<EntityRazorpaySettlementsApi>
{
    private EntityRazorpaySettlementsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpaySettlementsApi Settlement = new("settlement");

    public TResult Match<TResult>(Func<TResult> onSettlement, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Settlement => onSettlement(),
            _ => otherwise(Value)
        };

    public void Match(Action onSettlement, Action<string> otherwise)
    {
        if (this == Settlement) onSettlement();
        else otherwise(Value);
    }
}
