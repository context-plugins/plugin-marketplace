using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Name1LushaApiDocumentationProspectingSearchEnrichApi>))]
public sealed record Name1LushaApiDocumentationProspectingSearchEnrichApi : OpenStringEnum<Name1LushaApiDocumentationProspectingSearchEnrichApi>
{
    private Name1LushaApiDocumentationProspectingSearchEnrichApi(string value) : base(value)
    {
    }

    public static readonly Name1LushaApiDocumentationProspectingSearchEnrichApi AllSignals = new("allSignals");

    public static readonly Name1LushaApiDocumentationProspectingSearchEnrichApi Promotion = new("promotion");

    public static readonly Name1LushaApiDocumentationProspectingSearchEnrichApi CompanyChange = new("companyChange");

    public TResult Match<TResult>(Func<TResult> onAllSignals,
        Func<TResult> onPromotion,
        Func<TResult> onCompanyChange,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AllSignals => onAllSignals(),
            _ when this == Promotion => onPromotion(),
            _ when this == CompanyChange => onCompanyChange(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllSignals, Action onPromotion, Action onCompanyChange, Action<string> otherwise)
    {
        if (this == AllSignals) onAllSignals();
        else if (this == Promotion) onPromotion();
        else if (this == CompanyChange) onCompanyChange();
        else otherwise(Value);
    }
}
