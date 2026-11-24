using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status4BundleSocialPostCsvApi>))]
public sealed record Status4BundleSocialPostCsvApi : OpenStringEnum<Status4BundleSocialPostCsvApi>
{
    private Status4BundleSocialPostCsvApi(string value) : base(value)
    {
    }

    public static readonly Status4BundleSocialPostCsvApi Success = new("SUCCESS");

    public static readonly Status4BundleSocialPostCsvApi Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onSuccess, Func<TResult> onFailed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onFailed, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
