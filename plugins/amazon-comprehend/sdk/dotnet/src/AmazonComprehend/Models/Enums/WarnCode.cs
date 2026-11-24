using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The type of warning.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<WarnCode>))]
public sealed record WarnCode : OpenStringEnum<WarnCode>
{
    private WarnCode(string value) : base(value)
    {
    }

    public static readonly WarnCode InferencingPlaintextWithNativeTrainedModel = new(
        "INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL");

    public static readonly WarnCode InferencingNativeDocumentWithPlaintextTrainedModel = new(
        "INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL");

    public TResult Match<TResult>(Func<TResult> onInferencingPlaintextWithNativeTrainedModel,
        Func<TResult> onInferencingNativeDocumentWithPlaintextTrainedModel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InferencingPlaintextWithNativeTrainedModel => onInferencingPlaintextWithNativeTrainedModel(),
            _ when this ==
                InferencingNativeDocumentWithPlaintextTrainedModel => onInferencingNativeDocumentWithPlaintextTrainedModel(),
            _ => otherwise(Value)
        };

    public void Match(Action onInferencingPlaintextWithNativeTrainedModel,
        Action onInferencingNativeDocumentWithPlaintextTrainedModel,
        Action<string> otherwise)
    {
        if (this == InferencingPlaintextWithNativeTrainedModel) onInferencingPlaintextWithNativeTrainedModel();
        else if (this ==
            InferencingNativeDocumentWithPlaintextTrainedModel) onInferencingNativeDocumentWithPlaintextTrainedModel();
        else otherwise(Value);
    }
}
