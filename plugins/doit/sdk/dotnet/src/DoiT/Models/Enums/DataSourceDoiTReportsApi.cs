using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Data source of the report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataSourceDoiTReportsApi>))]
public sealed record DataSourceDoiTReportsApi : OpenStringEnum<DataSourceDoiTReportsApi>
{
    private DataSourceDoiTReportsApi(string value) : base(value)
    {
    }

    public static readonly DataSourceDoiTReportsApi Billing = new("billing");

    public static readonly DataSourceDoiTReportsApi Bqlens = new("bqlens");

    public static readonly DataSourceDoiTReportsApi BillingDatahub = new("billing-datahub");

    public static readonly DataSourceDoiTReportsApi KubernetesUtilization = new("kubernetes-utilization");

    public TResult Match<TResult>(Func<TResult> onBilling,
        Func<TResult> onBqlens,
        Func<TResult> onBillingDatahub,
        Func<TResult> onKubernetesUtilization,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Billing => onBilling(),
            _ when this == Bqlens => onBqlens(),
            _ when this == BillingDatahub => onBillingDatahub(),
            _ when this == KubernetesUtilization => onKubernetesUtilization(),
            _ => otherwise(Value)
        };

    public void Match(Action onBilling,
        Action onBqlens,
        Action onBillingDatahub,
        Action onKubernetesUtilization,
        Action<string> otherwise)
    {
        if (this == Billing) onBilling();
        else if (this == Bqlens) onBqlens();
        else if (this == BillingDatahub) onBillingDatahub();
        else if (this == KubernetesUtilization) onKubernetesUtilization();
        else otherwise(Value);
    }
}
