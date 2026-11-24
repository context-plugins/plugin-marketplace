using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Omission preserves the saved data source. Tokenomics requires customer enablement.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataSource1>))]
public sealed record DataSource1 : OpenStringEnum<DataSource1>
{
    private DataSource1(string value) : base(value)
    {
    }

    public static readonly DataSource1 Billing = new("billing");

    public static readonly DataSource1 BillingDatahub = new("billing-datahub");

    public static readonly DataSource1 KubernetesUtilization = new("kubernetes-utilization");

    public static readonly DataSource1 Tokenomics = new("tokenomics");

    public TResult Match<TResult>(Func<TResult> onBilling,
        Func<TResult> onBillingDatahub,
        Func<TResult> onKubernetesUtilization,
        Func<TResult> onTokenomics,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Billing => onBilling(),
            _ when this == BillingDatahub => onBillingDatahub(),
            _ when this == KubernetesUtilization => onKubernetesUtilization(),
            _ when this == Tokenomics => onTokenomics(),
            _ => otherwise(Value)
        };

    public void Match(Action onBilling,
        Action onBillingDatahub,
        Action onKubernetesUtilization,
        Action onTokenomics,
        Action<string> otherwise)
    {
        if (this == Billing) onBilling();
        else if (this == BillingDatahub) onBillingDatahub();
        else if (this == KubernetesUtilization) onKubernetesUtilization();
        else if (this == Tokenomics) onTokenomics();
        else otherwise(Value);
    }
}
