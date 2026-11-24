using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EnrichmentStatus>))]
public sealed record EnrichmentStatus : OpenStringEnum<EnrichmentStatus>
{
    private EnrichmentStatus(string value) : base(value)
    {
    }

    public static readonly EnrichmentStatus NotEnriched = new("Not Enriched");

    public static readonly EnrichmentStatus CompanyEnriched = new("Company Enriched");

    public static readonly EnrichmentStatus PersonEnriched = new("Person Enriched");

    public static readonly EnrichmentStatus PersonCompanyEnriched = new("Person & Company Enriched");

    public TResult Match<TResult>(Func<TResult> onNotEnriched,
        Func<TResult> onCompanyEnriched,
        Func<TResult> onPersonEnriched,
        Func<TResult> onPersonCompanyEnriched,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotEnriched => onNotEnriched(),
            _ when this == CompanyEnriched => onCompanyEnriched(),
            _ when this == PersonEnriched => onPersonEnriched(),
            _ when this == PersonCompanyEnriched => onPersonCompanyEnriched(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotEnriched,
        Action onCompanyEnriched,
        Action onPersonEnriched,
        Action onPersonCompanyEnriched,
        Action<string> otherwise)
    {
        if (this == NotEnriched) onNotEnriched();
        else if (this == CompanyEnriched) onCompanyEnriched();
        else if (this == PersonEnriched) onPersonEnriched();
        else if (this == PersonCompanyEnriched) onPersonCompanyEnriched();
        else otherwise(Value);
    }
}
