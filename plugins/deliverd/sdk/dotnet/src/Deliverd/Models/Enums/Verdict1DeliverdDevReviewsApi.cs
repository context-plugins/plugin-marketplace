using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Verdict1DeliverdDevReviewsApi>))]
public sealed record Verdict1DeliverdDevReviewsApi : OpenStringEnum<Verdict1DeliverdDevReviewsApi>
{
    private Verdict1DeliverdDevReviewsApi(string value) : base(value)
    {
    }

    public static readonly Verdict1DeliverdDevReviewsApi Approved = new("approved");

    public static readonly Verdict1DeliverdDevReviewsApi ChangesRequested = new("changes_requested");

    public TResult Match<TResult>(Func<TResult> onApproved,
        Func<TResult> onChangesRequested,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approved => onApproved(),
            _ when this == ChangesRequested => onChangesRequested(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproved, Action onChangesRequested, Action<string> otherwise)
    {
        if (this == Approved) onApproved();
        else if (this == ChangesRequested) onChangesRequested();
        else otherwise(Value);
    }
}
