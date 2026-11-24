using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// Whether the user has full access to the project or has comment-only access.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<WriteAccess>))]
public sealed record WriteAccess : OpenStringEnum<WriteAccess>
{
    private WriteAccess(string value) : base(value)
    {
    }

    public static readonly WriteAccess FullWrite = new("full_write");

    public static readonly WriteAccess CommentOnly = new("comment_only");

    public TResult Match<TResult>(Func<TResult> onFullWrite,
        Func<TResult> onCommentOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FullWrite => onFullWrite(),
            _ when this == CommentOnly => onCommentOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onFullWrite, Action onCommentOnly, Action<string> otherwise)
    {
        if (this == FullWrite) onFullWrite();
        else if (this == CommentOnly) onCommentOnly();
        else otherwise(Value);
    }
}
