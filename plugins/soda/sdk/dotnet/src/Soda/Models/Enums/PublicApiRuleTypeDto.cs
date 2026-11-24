using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicApiRuleTypeDto>))]
public sealed record PublicApiRuleTypeDto : OpenStringEnum<PublicApiRuleTypeDto>
{
    private PublicApiRuleTypeDto(string value) : base(value)
    {
    }

    public static readonly PublicApiRuleTypeDto Check = new("check");

    public static readonly PublicApiRuleTypeDto Monitor = new("monitor");

    public TResult Match<TResult>(Func<TResult> onCheck, Func<TResult> onMonitor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Check => onCheck(),
            _ when this == Monitor => onMonitor(),
            _ => otherwise(Value)
        };

    public void Match(Action onCheck, Action onMonitor, Action<string> otherwise)
    {
        if (this == Check) onCheck();
        else if (this == Monitor) onMonitor();
        else otherwise(Value);
    }
}
