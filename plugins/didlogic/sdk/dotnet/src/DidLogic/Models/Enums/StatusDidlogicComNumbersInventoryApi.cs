using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Current status of the number
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDidlogicComNumbersInventoryApi>))]
public sealed record StatusDidlogicComNumbersInventoryApi : OpenStringEnum<StatusDidlogicComNumbersInventoryApi>
{
    private StatusDidlogicComNumbersInventoryApi(string value) : base(value)
    {
    }

    public static readonly StatusDidlogicComNumbersInventoryApi Active = new("active");

    public static readonly StatusDidlogicComNumbersInventoryApi PendingDocs = new("pending_docs");

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
