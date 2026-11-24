using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The field to sort the tags by.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByCodeqrIoTagsApi>))]
public sealed record SortByCodeqrIoTagsApi : OpenStringEnum<SortByCodeqrIoTagsApi>
{
    private SortByCodeqrIoTagsApi(string value) : base(value)
    {
    }

    public static readonly SortByCodeqrIoTagsApi Name = new("name");

    public static readonly SortByCodeqrIoTagsApi CreatedAt = new("createdAt");

    public TResult Match<TResult>(Func<TResult> onName, Func<TResult> onCreatedAt, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Name => onName(),
            _ when this == CreatedAt => onCreatedAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onName, Action onCreatedAt, Action<string> otherwise)
    {
        if (this == Name) onName();
        else if (this == CreatedAt) onCreatedAt();
        else otherwise(Value);
    }
}
