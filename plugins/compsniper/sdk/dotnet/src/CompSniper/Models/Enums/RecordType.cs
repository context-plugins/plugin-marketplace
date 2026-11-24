using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RecordType>))]
public sealed record RecordType : OpenStringEnum<RecordType>
{
    private RecordType(string value) : base(value)
    {
    }

    public static readonly RecordType SingleUnitListing = new("single_unit_listing");

    public static readonly RecordType ListingAggregate = new("listing_aggregate");

    public TResult Match<TResult>(Func<TResult> onSingleUnitListing,
        Func<TResult> onListingAggregate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SingleUnitListing => onSingleUnitListing(),
            _ when this == ListingAggregate => onListingAggregate(),
            _ => otherwise(Value)
        };

    public void Match(Action onSingleUnitListing, Action onListingAggregate, Action<string> otherwise)
    {
        if (this == SingleUnitListing) onSingleUnitListing();
        else if (this == ListingAggregate) onListingAggregate();
        else otherwise(Value);
    }
}
