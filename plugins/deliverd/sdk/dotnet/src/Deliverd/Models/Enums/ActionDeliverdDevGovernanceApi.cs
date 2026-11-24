using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ActionDeliverdDevGovernanceApi>))]
public sealed record ActionDeliverdDevGovernanceApi : OpenStringEnum<ActionDeliverdDevGovernanceApi>
{
    private ActionDeliverdDevGovernanceApi(string value) : base(value)
    {
    }

    public static readonly ActionDeliverdDevGovernanceApi Read = new("read");

    public static readonly ActionDeliverdDevGovernanceApi Analyse = new("analyse");

    public static readonly ActionDeliverdDevGovernanceApi Recommend = new("recommend");

    public static readonly ActionDeliverdDevGovernanceApi Draft = new("draft");

    public static readonly ActionDeliverdDevGovernanceApi Modify = new("modify");

    public static readonly ActionDeliverdDevGovernanceApi Execute = new("execute");

    public static readonly ActionDeliverdDevGovernanceApi Publish = new("publish");

    public static readonly ActionDeliverdDevGovernanceApi Deploy = new("deploy");

    public static readonly ActionDeliverdDevGovernanceApi Send = new("send");

    public static readonly ActionDeliverdDevGovernanceApi Delete = new("delete");

    public static readonly ActionDeliverdDevGovernanceApi FinancialAction = new("financial_action");

    public static readonly ActionDeliverdDevGovernanceApi CustomerDecision = new("customer_decision");

    public TResult Match<TResult>(Func<TResult> onRead,
        Func<TResult> onAnalyse,
        Func<TResult> onRecommend,
        Func<TResult> onDraft,
        Func<TResult> onModify,
        Func<TResult> onExecute,
        Func<TResult> onPublish,
        Func<TResult> onDeploy,
        Func<TResult> onSend,
        Func<TResult> onDelete,
        Func<TResult> onFinancialAction,
        Func<TResult> onCustomerDecision,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Read => onRead(),
            _ when this == Analyse => onAnalyse(),
            _ when this == Recommend => onRecommend(),
            _ when this == Draft => onDraft(),
            _ when this == Modify => onModify(),
            _ when this == Execute => onExecute(),
            _ when this == Publish => onPublish(),
            _ when this == Deploy => onDeploy(),
            _ when this == Send => onSend(),
            _ when this == Delete => onDelete(),
            _ when this == FinancialAction => onFinancialAction(),
            _ when this == CustomerDecision => onCustomerDecision(),
            _ => otherwise(Value)
        };

    public void Match(Action onRead,
        Action onAnalyse,
        Action onRecommend,
        Action onDraft,
        Action onModify,
        Action onExecute,
        Action onPublish,
        Action onDeploy,
        Action onSend,
        Action onDelete,
        Action onFinancialAction,
        Action onCustomerDecision,
        Action<string> otherwise)
    {
        if (this == Read) onRead();
        else if (this == Analyse) onAnalyse();
        else if (this == Recommend) onRecommend();
        else if (this == Draft) onDraft();
        else if (this == Modify) onModify();
        else if (this == Execute) onExecute();
        else if (this == Publish) onPublish();
        else if (this == Deploy) onDeploy();
        else if (this == Send) onSend();
        else if (this == Delete) onDelete();
        else if (this == FinancialAction) onFinancialAction();
        else if (this == CustomerDecision) onCustomerDecision();
        else otherwise(Value);
    }
}
