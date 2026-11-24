using System;
using System.Text.Json.Serialization;
using Instacart.Core.Enum;

namespace Instacart.Models.Enums;

/// <summary>
/// The current status of the submission.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusInstacartCatalogItemsApi>))]
public sealed record StatusInstacartCatalogItemsApi : OpenStringEnum<StatusInstacartCatalogItemsApi>
{
    private StatusInstacartCatalogItemsApi(string value) : base(value)
    {
    }

    public static readonly StatusInstacartCatalogItemsApi Accepted = new("accepted");

    public static readonly StatusInstacartCatalogItemsApi Processing = new("processing");

    public static readonly StatusInstacartCatalogItemsApi Completed = new("completed");

    public static readonly StatusInstacartCatalogItemsApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onAccepted,
        Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Accepted => onAccepted(),
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccepted,
        Action onProcessing,
        Action onCompleted,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Accepted) onAccepted();
        else if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
