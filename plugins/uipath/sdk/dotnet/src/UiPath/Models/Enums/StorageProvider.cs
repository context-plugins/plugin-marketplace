using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Cloud storage backend provider
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StorageProvider>))]
public sealed record StorageProvider : OpenStringEnum<StorageProvider>
{
    private StorageProvider(string value) : base(value)
    {
    }

    public static readonly StorageProvider UiPath = new("UiPath");

    public static readonly StorageProvider Azure = new("Azure");

    public static readonly StorageProvider Amazon = new("Amazon");

    public static readonly StorageProvider Minio = new("Minio");

    public TResult Match<TResult>(Func<TResult> onUiPath,
        Func<TResult> onAzure,
        Func<TResult> onAmazon,
        Func<TResult> onMinio,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UiPath => onUiPath(),
            _ when this == Azure => onAzure(),
            _ when this == Amazon => onAmazon(),
            _ when this == Minio => onMinio(),
            _ => otherwise(Value)
        };

    public void Match(Action onUiPath, Action onAzure, Action onAmazon, Action onMinio, Action<string> otherwise)
    {
        if (this == UiPath) onUiPath();
        else if (this == Azure) onAzure();
        else if (this == Amazon) onAmazon();
        else if (this == Minio) onMinio();
        else otherwise(Value);
    }
}
