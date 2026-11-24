using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ProjectVisibility>))]
public sealed record ProjectVisibility : OpenStringEnum<ProjectVisibility>
{
    private ProjectVisibility(string value) : base(value)
    {
    }

    public static readonly ProjectVisibility PublicRead = new("PUBLIC_READ");

    public static readonly ProjectVisibility Private = new("PRIVATE");

    public TResult Match<TResult>(Func<TResult> onPublicRead,
        Func<TResult> onPrivate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PublicRead => onPublicRead(),
            _ when this == Private => onPrivate(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublicRead, Action onPrivate, Action<string> otherwise)
    {
        if (this == PublicRead) onPublicRead();
        else if (this == Private) onPrivate();
        else otherwise(Value);
    }
}
