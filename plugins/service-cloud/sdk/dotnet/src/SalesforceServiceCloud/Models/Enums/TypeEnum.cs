using System;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Enum;

namespace SalesforceServiceCloud.Models.Enums;

/// <summary>
/// Type of the transfer target.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum SalesforceCoreBotId = new("Salesforce:Core:Bot:Id");

    public static readonly TypeEnum SalesforceCoreQueueId = new("Salesforce:Core:Queue:Id");

    public static readonly TypeEnum SalesforceCoreSkillId = new("Salesforce:Core:Skill:Id");

    public static readonly TypeEnum SalesforceCoreFlowId = new("Salesforce:Core:Flow:Id");

    public TResult Match<TResult>(Func<TResult> onSalesforceCoreBotId,
        Func<TResult> onSalesforceCoreQueueId,
        Func<TResult> onSalesforceCoreSkillId,
        Func<TResult> onSalesforceCoreFlowId,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SalesforceCoreBotId => onSalesforceCoreBotId(),
            _ when this == SalesforceCoreQueueId => onSalesforceCoreQueueId(),
            _ when this == SalesforceCoreSkillId => onSalesforceCoreSkillId(),
            _ when this == SalesforceCoreFlowId => onSalesforceCoreFlowId(),
            _ => otherwise(Value)
        };

    public void Match(Action onSalesforceCoreBotId,
        Action onSalesforceCoreQueueId,
        Action onSalesforceCoreSkillId,
        Action onSalesforceCoreFlowId,
        Action<string> otherwise)
    {
        if (this == SalesforceCoreBotId) onSalesforceCoreBotId();
        else if (this == SalesforceCoreQueueId) onSalesforceCoreQueueId();
        else if (this == SalesforceCoreSkillId) onSalesforceCoreSkillId();
        else if (this == SalesforceCoreFlowId) onSalesforceCoreFlowId();
        else otherwise(Value);
    }
}
