using System;
using System.Text.Json.Serialization;
using Cosmic.Core.Enum;

namespace Cosmic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortCosmicRestApiV3ObjectRevisionsApi>))]
public sealed record SortCosmicRestApiV3ObjectRevisionsApi : OpenStringEnum<SortCosmicRestApiV3ObjectRevisionsApi>
{
    private SortCosmicRestApiV3ObjectRevisionsApi(string value) : base(value)
    {
    }

    public static readonly SortCosmicRestApiV3ObjectRevisionsApi CreatedAt = new("created_at");

    public static readonly SortCosmicRestApiV3ObjectRevisionsApi CreatedAt2 = new("-created_at");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onCreatedAt2,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == CreatedAt2 => onCreatedAt2(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt, Action onCreatedAt2, Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == CreatedAt2) onCreatedAt2();
        else otherwise(Value);
    }
}
