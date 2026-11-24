using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The background creation state of the post.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostProcessingState>))]
public sealed record PostProcessingState : OpenStringEnum<PostProcessingState>
{
    private PostProcessingState(string value) : base(value)
    {
    }

    public static readonly PostProcessingState Pending = new("pending");

    public TResult Match<TResult>(Func<TResult> onPending, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else otherwise(Value);
    }
}
