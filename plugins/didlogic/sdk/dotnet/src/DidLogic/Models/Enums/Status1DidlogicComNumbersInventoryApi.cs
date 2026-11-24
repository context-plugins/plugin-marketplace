using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Number status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1DidlogicComNumbersInventoryApi>))]
public sealed record Status1DidlogicComNumbersInventoryApi : OpenStringEnum<Status1DidlogicComNumbersInventoryApi>
{
    private Status1DidlogicComNumbersInventoryApi(string value) : base(value)
    {
    }

    public static readonly Status1DidlogicComNumbersInventoryApi Active = new("active");

    public static readonly Status1DidlogicComNumbersInventoryApi PendingDocs = new("pending_docs");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onPendingDocs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == PendingDocs => onPendingDocs(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onPendingDocs, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == PendingDocs) onPendingDocs();
        else otherwise(Value);
    }
}
