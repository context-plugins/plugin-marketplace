using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ProductUpdateType>))]
public sealed record ProductUpdateType : OpenStringEnum<ProductUpdateType>
{
    private ProductUpdateType(string value) : base(value)
    {
    }

    public static readonly ProductUpdateType Agent = new("agent");

    public static readonly ProductUpdateType Product = new("product");

    public static readonly ProductUpdateType PrepaidCreditBundle = new("prepaidCreditBundle");

    public TResult Match<TResult>(Func<TResult> onAgent,
        Func<TResult> onProduct,
        Func<TResult> onPrepaidCreditBundle,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Agent => onAgent(),
            _ when this == Product => onProduct(),
            _ when this == PrepaidCreditBundle => onPrepaidCreditBundle(),
            _ => otherwise(Value)
        };

    public void Match(Action onAgent, Action onProduct, Action onPrepaidCreditBundle, Action<string> otherwise)
    {
        if (this == Agent) onAgent();
        else if (this == Product) onProduct();
        else if (this == PrepaidCreditBundle) onPrepaidCreditBundle();
        else otherwise(Value);
    }
}
