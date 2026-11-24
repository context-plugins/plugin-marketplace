using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine the right API to use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ListApi>))]
public sealed record ListApi : OpenStringEnum<ListApi>
{
    private ListApi(string value) : base(value)
    {
    }

    public static readonly ListApi ListApiUnspecified = new("LIST_API_UNSPECIFIED");

    public static readonly ListApi ListObjectsV2 = new("LIST_OBJECTS_V2");

    public static readonly ListApi ListObjects = new("LIST_OBJECTS");

    public TResult Match<TResult>(Func<TResult> onListApiUnspecified,
        Func<TResult> onListObjectsV2,
        Func<TResult> onListObjects,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ListApiUnspecified => onListApiUnspecified(),
            _ when this == ListObjectsV2 => onListObjectsV2(),
            _ when this == ListObjects => onListObjects(),
            _ => otherwise(Value)
        };

    public void Match(Action onListApiUnspecified,
        Action onListObjectsV2,
        Action onListObjects,
        Action<string> otherwise)
    {
        if (this == ListApiUnspecified) onListApiUnspecified();
        else if (this == ListObjectsV2) onListObjectsV2();
        else if (this == ListObjects) onListObjects();
        else otherwise(Value);
    }
}
