using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Choose whether you want to update a real-time or a post-call category. The input type you specify must match the input type specified when the category was created. For example, if you created a category with the POST_CALL input type, you must use POST_CALL as the input type when updating this category.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InputType2>))]
public sealed record InputType2 : OpenStringEnum<InputType2>
{
    private InputType2(string value) : base(value)
    {
    }

    public static readonly InputType2 RealTime = new("REAL_TIME");

    public static readonly InputType2 PostCall = new("POST_CALL");

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
