using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeCoreAnalyticsApi>))]
public sealed record TypeCoreAnalyticsApi : OpenStringEnum<TypeCoreAnalyticsApi>
{
    private TypeCoreAnalyticsApi(string value) : base(value)
    {
    }

    public static readonly TypeCoreAnalyticsApi Error = new("error");

    public TResult Match<TResult>(Func<TResult> onError, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onError, Action<string> otherwise)
    {
        if (this == Error) onError();
        else otherwise(Value);
    }
}
