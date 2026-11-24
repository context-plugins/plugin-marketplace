using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Choose whether you want to create a real-time or a post-call category for your Call Analytics transcription. Specifying POST_CALL assigns your category to post-call transcriptions; categories with this input type cannot be applied to streaming (real-time) transcriptions. Specifying REAL_TIME assigns your category to streaming transcriptions; categories with this input type cannot be applied to post-call transcriptions. If you do not include InputType, your category is created as a post-call category by default.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InputType1>))]
public sealed record InputType1 : OpenStringEnum<InputType1>
{
    private InputType1(string value) : base(value)
    {
    }

    public static readonly InputType1 RealTime = new("REAL_TIME");

    public static readonly InputType1 PostCall = new("POST_CALL");

    public TResult Match<TResult>(Func<TResult> onRealTime,
        Func<TResult> onPostCall,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RealTime => onRealTime(),
            _ when this == PostCall => onPostCall(),
            _ => otherwise(Value)
        };

    public void Match(Action onRealTime, Action onPostCall, Action<string> otherwise)
    {
        if (this == RealTime) onRealTime();
        else if (this == PostCall) onPostCall();
        else otherwise(Value);
    }
}
