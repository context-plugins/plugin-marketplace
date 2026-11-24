using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<QuotaCounterScope>))]
public sealed record QuotaCounterScope : OpenStringEnum<QuotaCounterScope>
{
    private QuotaCounterScope(string value) : base(value)
    {
    }

    public static readonly QuotaCounterScope QuotaCounterScopeUnspecified = new("QUOTA_COUNTER_SCOPE_UNSPECIFIED");

    public static readonly QuotaCounterScope Proxy = new("PROXY");

    public static readonly QuotaCounterScope Operation = new("OPERATION");

    public static readonly QuotaCounterScope Product = new("PRODUCT");

    public TResult Match<TResult>(Func<TResult> onQuotaCounterScopeUnspecified,
        Func<TResult> onProxy,
        Func<TResult> onOperation,
        Func<TResult> onProduct,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == QuotaCounterScopeUnspecified => onQuotaCounterScopeUnspecified(),
            _ when this == Proxy => onProxy(),
            _ when this == Operation => onOperation(),
            _ when this == Product => onProduct(),
            _ => otherwise(Value)
        };

    public void Match(Action onQuotaCounterScopeUnspecified,
        Action onProxy,
        Action onOperation,
        Action onProduct,
        Action<string> otherwise)
    {
        if (this == QuotaCounterScopeUnspecified) onQuotaCounterScopeUnspecified();
        else if (this == Proxy) onProxy();
        else if (this == Operation) onOperation();
        else if (this == Product) onProduct();
        else otherwise(Value);
    }
}
