using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The status for the dataset.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonRekognitionProjectApi>))]
public sealed record StatusAmazonRekognitionProjectApi : OpenStringEnum<StatusAmazonRekognitionProjectApi>
{
    private StatusAmazonRekognitionProjectApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonRekognitionProjectApi CreateInProgress = new("CREATE_IN_PROGRESS");

    public static readonly StatusAmazonRekognitionProjectApi CreateComplete = new("CREATE_COMPLETE");

    public static readonly StatusAmazonRekognitionProjectApi CreateFailed = new("CREATE_FAILED");

    public static readonly StatusAmazonRekognitionProjectApi UpdateInProgress = new("UPDATE_IN_PROGRESS");

    public static readonly StatusAmazonRekognitionProjectApi UpdateComplete = new("UPDATE_COMPLETE");

    public static readonly StatusAmazonRekognitionProjectApi UpdateFailed = new("UPDATE_FAILED");

    public static readonly StatusAmazonRekognitionProjectApi DeleteInProgress = new("DELETE_IN_PROGRESS");

    public TResult Match<TResult>(Func<TResult> onCreateInProgress,
        Func<TResult> onCreateComplete,
        Func<TResult> onCreateFailed,
        Func<TResult> onUpdateInProgress,
        Func<TResult> onUpdateComplete,
        Func<TResult> onUpdateFailed,
        Func<TResult> onDeleteInProgress,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreateInProgress => onCreateInProgress(),
            _ when this == CreateComplete => onCreateComplete(),
            _ when this == CreateFailed => onCreateFailed(),
            _ when this == UpdateInProgress => onUpdateInProgress(),
            _ when this == UpdateComplete => onUpdateComplete(),
            _ when this == UpdateFailed => onUpdateFailed(),
            _ when this == DeleteInProgress => onDeleteInProgress(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreateInProgress,
        Action onCreateComplete,
        Action onCreateFailed,
        Action onUpdateInProgress,
        Action onUpdateComplete,
        Action onUpdateFailed,
        Action onDeleteInProgress,
        Action<string> otherwise)
    {
        if (this == CreateInProgress) onCreateInProgress();
        else if (this == CreateComplete) onCreateComplete();
        else if (this == CreateFailed) onCreateFailed();
        else if (this == UpdateInProgress) onUpdateInProgress();
        else if (this == UpdateComplete) onUpdateComplete();
        else if (this == UpdateFailed) onUpdateFailed();
        else if (this == DeleteInProgress) onDeleteInProgress();
        else otherwise(Value);
    }
}
