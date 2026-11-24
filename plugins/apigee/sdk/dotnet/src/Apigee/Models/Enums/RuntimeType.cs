using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RuntimeType>))]
public sealed record RuntimeType : OpenStringEnum<RuntimeType>
{
    private RuntimeType(string value) : base(value)
    {
    }

    public static readonly RuntimeType RuntimeTypeUnspecified = new("RUNTIME_TYPE_UNSPECIFIED");

    public static readonly RuntimeType Cloud = new("CLOUD");

    public static readonly RuntimeType Hybrid = new("HYBRID");

    public TResult Match<TResult>(Func<TResult> onRuntimeTypeUnspecified,
        Func<TResult> onCloud,
        Func<TResult> onHybrid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RuntimeTypeUnspecified => onRuntimeTypeUnspecified(),
            _ when this == Cloud => onCloud(),
            _ when this == Hybrid => onHybrid(),
            _ => otherwise(Value)
        };

    public void Match(Action onRuntimeTypeUnspecified, Action onCloud, Action onHybrid, Action<string> otherwise)
    {
        if (this == RuntimeTypeUnspecified) onRuntimeTypeUnspecified();
        else if (this == Cloud) onCloud();
        else if (this == Hybrid) onHybrid();
        else otherwise(Value);
    }
}
