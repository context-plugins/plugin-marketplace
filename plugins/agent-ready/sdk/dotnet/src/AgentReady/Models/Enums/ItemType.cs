using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

/// <summary>
/// Optional filter mapping to an Agent Ready corpus type. 'any' (default) searches everything.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ItemType>))]
public sealed record ItemType : OpenStringEnum<ItemType>
{
    private ItemType(string value) : base(value)
    {
    }

    public static readonly ItemType Methodology = new("methodology");

    public static readonly ItemType Checks = new("checks");

    public static readonly ItemType Specs = new("specs");

    public static readonly ItemType LlmsTxt = new("llms-txt");

    public static readonly ItemType Check = new("check");

    public static readonly ItemType Page = new("page");

    public static readonly ItemType Any = new("any");

    public TResult Match<TResult>(Func<TResult> onMethodology,
        Func<TResult> onChecks,
        Func<TResult> onSpecs,
        Func<TResult> onLlmsTxt,
        Func<TResult> onCheck,
        Func<TResult> onPage,
        Func<TResult> onAny,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Methodology => onMethodology(),
            _ when this == Checks => onChecks(),
            _ when this == Specs => onSpecs(),
            _ when this == LlmsTxt => onLlmsTxt(),
            _ when this == Check => onCheck(),
            _ when this == Page => onPage(),
            _ when this == Any => onAny(),
            _ => otherwise(Value)
        };

    public void Match(Action onMethodology,
        Action onChecks,
        Action onSpecs,
        Action onLlmsTxt,
        Action onCheck,
        Action onPage,
        Action onAny,
        Action<string> otherwise)
    {
        if (this == Methodology) onMethodology();
        else if (this == Checks) onChecks();
        else if (this == Specs) onSpecs();
        else if (this == LlmsTxt) onLlmsTxt();
        else if (this == Check) onCheck();
        else if (this == Page) onPage();
        else if (this == Any) onAny();
        else otherwise(Value);
    }
}
