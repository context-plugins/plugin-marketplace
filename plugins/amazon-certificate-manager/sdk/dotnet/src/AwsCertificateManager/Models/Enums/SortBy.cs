using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Specifies the field to sort results by. If you specify SortBy, you must also specify SortOrder.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy CreatedAt = new("CREATED_AT");

    public TResult Match<TResult>(Func<TResult> onCreatedAt, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt, Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else otherwise(Value);
    }
}
