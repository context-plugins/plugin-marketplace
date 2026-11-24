using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// A view is DRAFT until explicitly published. For customer-scoped views, only PUBLISHED views are embeddable and served to end-customers; a DRAFT is not. For organization-scoped views, publishing is only a 'ready to use' marker — both DRAFT and PUBLISHED are visible to your organization's members in Paid (publishing does not change who in the org can see it), and neither is ever embeddable to an end-customer.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomViewStatus>))]
public sealed record CustomViewStatus : OpenStringEnum<CustomViewStatus>
{
    private CustomViewStatus(string value) : base(value)
    {
    }

    public static readonly CustomViewStatus Draft = new("DRAFT");

    public static readonly CustomViewStatus Published = new("PUBLISHED");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<TResult> onPublished, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Published => onPublished(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onPublished, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Published) onPublished();
        else otherwise(Value);
    }
}
