using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Projection lifecycle state. <c>expired</c> means the planning cycle has lapsed and a new projection should be triggered by the automated scheduler. When the stored document has no <c>status</c>, the server returns <c>valid</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDoiTPerfectScaleForCommitmentsAwsApi>))]
public sealed record StatusDoiTPerfectScaleForCommitmentsAwsApi : OpenStringEnum<StatusDoiTPerfectScaleForCommitmentsAwsApi>
{
    private StatusDoiTPerfectScaleForCommitmentsAwsApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTPerfectScaleForCommitmentsAwsApi Valid = new("valid");

    public static readonly StatusDoiTPerfectScaleForCommitmentsAwsApi Expired = new("expired");

    public TResult Match<TResult>(Func<TResult> onValid, Func<TResult> onExpired, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Valid => onValid(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onValid, Action onExpired, Action<string> otherwise)
    {
        if (this == Valid) onValid();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
