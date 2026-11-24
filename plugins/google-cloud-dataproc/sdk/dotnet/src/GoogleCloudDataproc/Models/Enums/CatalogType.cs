using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The type of the catalog.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CatalogType>))]
public sealed record CatalogType : OpenStringEnum<CatalogType>
{
    private CatalogType(string value) : base(value)
    {
    }

    public static readonly CatalogType CatalogTypeUnspecified = new("CATALOG_TYPE_UNSPECIFIED");

    public static readonly CatalogType Hive = new("HIVE");

    public static readonly CatalogType Iceberg = new("ICEBERG");

    public TResult Match<TResult>(Func<TResult> onCatalogTypeUnspecified,
        Func<TResult> onHive,
        Func<TResult> onIceberg,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CatalogTypeUnspecified => onCatalogTypeUnspecified(),
            _ when this == Hive => onHive(),
            _ when this == Iceberg => onIceberg(),
            _ => otherwise(Value)
        };

    public void Match(Action onCatalogTypeUnspecified, Action onHive, Action onIceberg, Action<string> otherwise)
    {
        if (this == CatalogTypeUnspecified) onCatalogTypeUnspecified();
        else if (this == Hive) onHive();
        else if (this == Iceberg) onIceberg();
        else otherwise(Value);
    }
}
