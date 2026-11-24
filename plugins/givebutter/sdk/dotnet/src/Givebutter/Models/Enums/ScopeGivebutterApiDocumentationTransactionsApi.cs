using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ScopeGivebutterApiDocumentationTransactionsApi>))]
public sealed record ScopeGivebutterApiDocumentationTransactionsApi : OpenStringEnum<ScopeGivebutterApiDocumentationTransactionsApi>
{
    private ScopeGivebutterApiDocumentationTransactionsApi(string value) : base(value)
    {
    }

    public static readonly ScopeGivebutterApiDocumentationTransactionsApi All = new("all");

    public static readonly ScopeGivebutterApiDocumentationTransactionsApi Benefiting = new("benefiting");

    public static readonly ScopeGivebutterApiDocumentationTransactionsApi Chapters = new("chapters");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onBenefiting,
        Func<TResult> onChapters,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Benefiting => onBenefiting(),
            _ when this == Chapters => onChapters(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onBenefiting, Action onChapters, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Benefiting) onBenefiting();
        else if (this == Chapters) onChapters();
        else otherwise(Value);
    }
}
