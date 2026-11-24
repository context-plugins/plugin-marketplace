using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ItemType3>))]
public sealed record ItemType3 : OpenStringEnum<ItemType3>
{
    private ItemType3(string value) : base(value)
    {
    }

    public static readonly ItemType3 Methodology = new("methodology");

    public static readonly ItemType3 Checks = new("checks");

    public static readonly ItemType3 Specs = new("specs");

    public static readonly ItemType3 LlmsTxt = new("llms-txt");

    public static readonly ItemType3 Check = new("check");

    public static readonly ItemType3 Page = new("page");

    public TResult Match<TResult>(Func<TResult> onMethodology,
        Func<TResult> onChecks,
        Func<TResult> onSpecs,
        Func<TResult> onLlmsTxt,
        Func<TResult> onCheck,
        Func<TResult> onPage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Methodology => onMethodology(),
            _ when this == Checks => onChecks(),
            _ when this == Specs => onSpecs(),
            _ when this == LlmsTxt => onLlmsTxt(),
            _ when this == Check => onCheck(),
            _ when this == Page => onPage(),
            _ => otherwise(Value)
        };

    public void Match(Action onMethodology,
        Action onChecks,
        Action onSpecs,
        Action onLlmsTxt,
        Action onCheck,
        Action onPage,
        Action<string> otherwise)
    {
        if (this == Methodology) onMethodology();
        else if (this == Checks) onChecks();
        else if (this == Specs) onSpecs();
        else if (this == LlmsTxt) onLlmsTxt();
        else if (this == Check) onCheck();
        else if (this == Page) onPage();
        else otherwise(Value);
    }
}
