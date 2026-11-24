using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Sort>))]
public sealed record Sort : OpenStringEnum<Sort>
{
    private Sort(string value) : base(value)
    {
    }

    public static readonly Sort CreatorUuid = new("creator.uuid");

    public static readonly Sort CreatedOn = new("created_on");

    public static readonly Sort RunCreationDate = new("run_creation_date");

    public TResult Match<TResult>(Func<TResult> onCreatorUuid,
        Func<TResult> onCreatedOn,
        Func<TResult> onRunCreationDate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatorUuid => onCreatorUuid(),
            _ when this == CreatedOn => onCreatedOn(),
            _ when this == RunCreationDate => onRunCreationDate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatorUuid, Action onCreatedOn, Action onRunCreationDate, Action<string> otherwise)
    {
        if (this == CreatorUuid) onCreatorUuid();
        else if (this == CreatedOn) onCreatedOn();
        else if (this == RunCreationDate) onRunCreationDate();
        else otherwise(Value);
    }
}
