using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Data source used to query data for the alert. Affects which dimensions and metrics are available.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataSource>))]
public sealed record DataSource : OpenStringEnum<DataSource>
{
    private DataSource(string value) : base(value)
    {
    }

    public static readonly DataSource Billing = new("billing");

    public static readonly DataSource BillingDatahub = new("billing-datahub");

    public static readonly DataSource KubernetesUtilization = new("kubernetes-utilization");

    public static readonly DataSource Tokenomics = new("tokenomics");

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
