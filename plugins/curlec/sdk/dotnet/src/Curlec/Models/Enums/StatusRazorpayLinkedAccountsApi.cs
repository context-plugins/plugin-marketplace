using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Account status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusRazorpayLinkedAccountsApi>))]
public sealed record StatusRazorpayLinkedAccountsApi : OpenStringEnum<StatusRazorpayLinkedAccountsApi>
{
    private StatusRazorpayLinkedAccountsApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayLinkedAccountsApi Created = new("created");

    public static readonly StatusRazorpayLinkedAccountsApi Suspended = new("suspended");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onSuspended,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Suspended => onSuspended(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onSuspended, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Suspended) onSuspended();
        else otherwise(Value);
    }
}
