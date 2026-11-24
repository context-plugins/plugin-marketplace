using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreationSource>))]
public sealed record CreationSource : OpenStringEnum<CreationSource>
{
    private CreationSource(string value) : base(value)
    {
    }

    public static readonly CreationSource Manual = new("manual");

    public static readonly CreationSource Api = new("api");

    public static readonly CreationSource Crm = new("crm");

    public static readonly CreationSource Other = new("other");

    public TResult Match<TResult>(Func<TResult> onManual,
        Func<TResult> onApi,
        Func<TResult> onCrm,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Manual => onManual(),
            _ when this == Api => onApi(),
            _ when this == Crm => onCrm(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onManual, Action onApi, Action onCrm, Action onOther, Action<string> otherwise)
    {
        if (this == Manual) onManual();
        else if (this == Api) onApi();
        else if (this == Crm) onCrm();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
