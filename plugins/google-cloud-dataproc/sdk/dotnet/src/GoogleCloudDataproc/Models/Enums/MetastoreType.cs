using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// The type of the backend metastore.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MetastoreType>))]
public sealed record MetastoreType : OpenStringEnum<MetastoreType>
{
    private MetastoreType(string value) : base(value)
    {
    }

    public static readonly MetastoreType MetastoreTypeUnspecified = new("METASTORE_TYPE_UNSPECIFIED");

    public static readonly MetastoreType Bigquery = new("BIGQUERY");

    public static readonly MetastoreType DataprocMetastore = new("DATAPROC_METASTORE");

    public TResult Match<TResult>(Func<TResult> onMetastoreTypeUnspecified,
        Func<TResult> onBigquery,
        Func<TResult> onDataprocMetastore,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MetastoreTypeUnspecified => onMetastoreTypeUnspecified(),
            _ when this == Bigquery => onBigquery(),
            _ when this == DataprocMetastore => onDataprocMetastore(),
            _ => otherwise(Value)
        };

    public void Match(Action onMetastoreTypeUnspecified,
        Action onBigquery,
        Action onDataprocMetastore,
        Action<string> otherwise)
    {
        if (this == MetastoreTypeUnspecified) onMetastoreTypeUnspecified();
        else if (this == Bigquery) onBigquery();
        else if (this == DataprocMetastore) onDataprocMetastore();
        else otherwise(Value);
    }
}
