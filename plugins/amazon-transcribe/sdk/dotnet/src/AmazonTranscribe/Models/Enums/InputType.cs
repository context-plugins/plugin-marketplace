using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The input type associated with the specified category. POST_CALL refers to a category that is applied to batch transcriptions; REAL_TIME refers to a category that is applied to streaming transcriptions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InputType>))]
public sealed record InputType : OpenStringEnum<InputType>
{
    private InputType(string value) : base(value)
    {
    }

    public static readonly InputType RealTime = new("REAL_TIME");

    public static readonly InputType PostCall = new("POST_CALL");

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
