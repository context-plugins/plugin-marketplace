using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CustomersGetParametersCreationState>))]
public sealed record CustomersGetParametersCreationState : OpenStringEnum<CustomersGetParametersCreationState>
{
    private CustomersGetParametersCreationState(string value) : base(value)
    {
    }

    public static readonly CustomersGetParametersCreationState Draft = new("draft");

    public static readonly CustomersGetParametersCreationState Active = new("active");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<TResult> onActive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Active => onActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onActive, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Active) onActive();
        else otherwise(Value);
    }
}
