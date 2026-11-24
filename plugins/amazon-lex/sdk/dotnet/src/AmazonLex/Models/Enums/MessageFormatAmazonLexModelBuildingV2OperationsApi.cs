using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The format of the response message. One of the following values: PlainText - The message contains plain UTF-8 text. CustomPayload - The message is a custom format for the client. SSML - The message contains text formatted for voice output. Composite - The message contains an escaped JSON object containing one or more messages from the groups that messages were assigned to when the intent was created.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MessageFormatAmazonLexModelBuildingV2OperationsApi>))]
public sealed record MessageFormatAmazonLexModelBuildingV2OperationsApi : OpenStringEnum<MessageFormatAmazonLexModelBuildingV2OperationsApi>
{
    private MessageFormatAmazonLexModelBuildingV2OperationsApi(string value) : base(value)
    {
    }

    public static readonly MessageFormatAmazonLexModelBuildingV2OperationsApi PlainText = new("PlainText");

    public static readonly MessageFormatAmazonLexModelBuildingV2OperationsApi CustomPayload = new("CustomPayload");

    public static readonly MessageFormatAmazonLexModelBuildingV2OperationsApi Ssml = new("SSML");

    public static readonly MessageFormatAmazonLexModelBuildingV2OperationsApi Composite = new("Composite");

    public TResult Match<TResult>(Func<TResult> onPlainText,
        Func<TResult> onCustomPayload,
        Func<TResult> onSsml,
        Func<TResult> onComposite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PlainText => onPlainText(),
            _ when this == CustomPayload => onCustomPayload(),
            _ when this == Ssml => onSsml(),
            _ when this == Composite => onComposite(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlainText,
        Action onCustomPayload,
        Action onSsml,
        Action onComposite,
        Action<string> otherwise)
    {
        if (this == PlainText) onPlainText();
        else if (this == CustomPayload) onCustomPayload();
        else if (this == Ssml) onSsml();
        else if (this == Composite) onComposite();
        else otherwise(Value);
    }
}
