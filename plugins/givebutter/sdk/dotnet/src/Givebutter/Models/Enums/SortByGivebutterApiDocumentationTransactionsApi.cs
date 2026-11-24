using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortByGivebutterApiDocumentationTransactionsApi>))]
public sealed record SortByGivebutterApiDocumentationTransactionsApi : OpenStringEnum<SortByGivebutterApiDocumentationTransactionsApi>
{
    private SortByGivebutterApiDocumentationTransactionsApi(string value) : base(value)
    {
    }

    public static readonly SortByGivebutterApiDocumentationTransactionsApi Amount = new("amount");

    public static readonly SortByGivebutterApiDocumentationTransactionsApi TransactedAt = new("transacted_at");

    public static readonly SortByGivebutterApiDocumentationTransactionsApi CreatedAt = new("created_at");

    public static readonly SortByGivebutterApiDocumentationTransactionsApi ContactName = new("contact_name");

    public TResult Match<TResult>(Func<TResult> onAmount,
        Func<TResult> onTransactedAt,
        Func<TResult> onCreatedAt,
        Func<TResult> onContactName,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Amount => onAmount(),
            _ when this == TransactedAt => onTransactedAt(),
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == ContactName => onContactName(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmount,
        Action onTransactedAt,
        Action onCreatedAt,
        Action onContactName,
        Action<string> otherwise)
    {
        if (this == Amount) onAmount();
        else if (this == TransactedAt) onTransactedAt();
        else if (this == CreatedAt) onCreatedAt();
        else if (this == ContactName) onContactName();
        else otherwise(Value);
    }
}
