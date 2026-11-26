using System;
using System.Text.Json.Serialization;
using EinsteinBots.Core.Enum;

namespace EinsteinBots.Models.Enums;

/// <summary>
/// Referrer type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 SalesforceCoreBotId = new("Salesforce:Core:Bot:Id");

    public static readonly Type1 SalesforceBotRuntimeSessionId = new("Salesforce:BotRuntime:Session:Id");

    public TResult Match<TResult>(Func<TResult> onSalesforceCoreBotId,
        Func<TResult> onSalesforceBotRuntimeSessionId,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SalesforceCoreBotId => onSalesforceCoreBotId(),
            _ when this == SalesforceBotRuntimeSessionId => onSalesforceBotRuntimeSessionId(),
            _ => otherwise(Value)
        };

    public void Match(Action onSalesforceCoreBotId, Action onSalesforceBotRuntimeSessionId, Action<string> otherwise)
    {
        if (this == SalesforceCoreBotId) onSalesforceCoreBotId();
        else if (this == SalesforceBotRuntimeSessionId) onSalesforceBotRuntimeSessionId();
        else otherwise(Value);
    }
}
