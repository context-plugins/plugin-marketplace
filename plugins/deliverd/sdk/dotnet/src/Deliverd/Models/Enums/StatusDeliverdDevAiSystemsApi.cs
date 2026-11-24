using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDeliverdDevAiSystemsApi>))]
public sealed record StatusDeliverdDevAiSystemsApi : OpenStringEnum<StatusDeliverdDevAiSystemsApi>
{
    private StatusDeliverdDevAiSystemsApi(string value) : base(value)
    {
    }

    public static readonly StatusDeliverdDevAiSystemsApi Active = new("active");

    public static readonly StatusDeliverdDevAiSystemsApi Retired = new("retired");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onRetired, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Retired => onRetired(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onRetired, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Retired) onRetired();
        else otherwise(Value);
    }
}
