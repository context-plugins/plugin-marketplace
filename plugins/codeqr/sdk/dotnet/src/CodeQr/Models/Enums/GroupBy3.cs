using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<GroupBy3>))]
public sealed record GroupBy3 : OpenStringEnum<GroupBy3>
{
    private GroupBy3(string value) : base(value)
    {
    }

    public static readonly GroupBy3 FolderId = new("folderId");

    public TResult Match<TResult>(Func<TResult> onFolderId, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FolderId => onFolderId(),
            _ => otherwise(Value)
        };

    public void Match(Action onFolderId, Action<string> otherwise)
    {
        if (this == FolderId) onFolderId();
        else otherwise(Value);
    }
}
