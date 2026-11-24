using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeAsanaStoriesApi>))]
public sealed record TypeAsanaStoriesApi : OpenStringEnum<TypeAsanaStoriesApi>
{
    private TypeAsanaStoriesApi(string value) : base(value)
    {
    }

    public static readonly TypeAsanaStoriesApi Comment = new("comment");

    public static readonly TypeAsanaStoriesApi System = new("system");

    public TResult Match<TResult>(Func<TResult> onComment, Func<TResult> onSystem, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comment => onComment(),
            _ when this == System => onSystem(),
            _ => otherwise(Value)
        };

    public void Match(Action onComment, Action onSystem, Action<string> otherwise)
    {
        if (this == Comment) onComment();
        else if (this == System) onSystem();
        else otherwise(Value);
    }
}
