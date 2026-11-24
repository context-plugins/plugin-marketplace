using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// Status of the retrieval.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAwsXRayOperationsApi>))]
public sealed record StatusAwsXRayOperationsApi : OpenStringEnum<StatusAwsXRayOperationsApi>
{
    private StatusAwsXRayOperationsApi(string value) : base(value)
    {
    }

    public static readonly StatusAwsXRayOperationsApi Pending = new("PENDING");

    public static readonly StatusAwsXRayOperationsApi Active = new("ACTIVE");

    public TResult Match<TResult>(Func<TResult> onPending, Func<TResult> onActive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Active => onActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onActive, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Active) onActive();
        else otherwise(Value);
    }
}
