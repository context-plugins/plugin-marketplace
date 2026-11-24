using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ExamplePlinthUsGrantsDataOrganizationsApi>))]
public sealed record ExamplePlinthUsGrantsDataOrganizationsApi : OpenStringEnum<ExamplePlinthUsGrantsDataOrganizationsApi>
{
    private ExamplePlinthUsGrantsDataOrganizationsApi(string value) : base(value)
    {
    }

    public static readonly ExamplePlinthUsGrantsDataOrganizationsApi _1 = new("1");

    public static readonly ExamplePlinthUsGrantsDataOrganizationsApi Candid = new("candid");

    public static readonly ExamplePlinthUsGrantsDataOrganizationsApi NotFound = new("not_found");

    public static readonly ExamplePlinthUsGrantsDataOrganizationsApi Taster = new("taster");

    public static readonly ExamplePlinthUsGrantsDataOrganizationsApi List = new("list");

    public TResult Match<TResult>(Func<TResult> on_1,
        Func<TResult> onCandid,
        Func<TResult> onNotFound,
        Func<TResult> onTaster,
        Func<TResult> onList,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1 => on_1(),
            _ when this == Candid => onCandid(),
            _ when this == NotFound => onNotFound(),
            _ when this == Taster => onTaster(),
            _ when this == List => onList(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1,
        Action onCandid,
        Action onNotFound,
        Action onTaster,
        Action onList,
        Action<string> otherwise)
    {
        if (this == _1) on_1();
        else if (this == Candid) onCandid();
        else if (this == NotFound) onNotFound();
        else if (this == Taster) onTaster();
        else if (this == List) onList();
        else otherwise(Value);
    }
}
