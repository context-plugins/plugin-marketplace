using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusRazorpayXAccountValidationApi>))]
public sealed record StatusRazorpayXAccountValidationApi : OpenStringEnum<StatusRazorpayXAccountValidationApi>
{
    private StatusRazorpayXAccountValidationApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayXAccountValidationApi Created = new("created");

    public static readonly StatusRazorpayXAccountValidationApi Completed = new("completed");

    public static readonly StatusRazorpayXAccountValidationApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
