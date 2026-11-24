using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<View>))]
public sealed record View : OpenStringEnum<View>
{
    private View(string value) : base(value)
    {
    }

    public static readonly View IngressConfigViewUnspecified = new("INGRESS_CONFIG_VIEW_UNSPECIFIED");

    public static readonly View Basic = new("BASIC");

    public static readonly View Full = new("FULL");

    public TResult Match<TResult>(Func<TResult> onIngressConfigViewUnspecified,
        Func<TResult> onBasic,
        Func<TResult> onFull,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IngressConfigViewUnspecified => onIngressConfigViewUnspecified(),
            _ when this == Basic => onBasic(),
            _ when this == Full => onFull(),
            _ => otherwise(Value)
        };

    public void Match(Action onIngressConfigViewUnspecified, Action onBasic, Action onFull, Action<string> otherwise)
    {
        if (this == IngressConfigViewUnspecified) onIngressConfigViewUnspecified();
        else if (this == Basic) onBasic();
        else if (this == Full) onFull();
        else otherwise(Value);
    }
}
