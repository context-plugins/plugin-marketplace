using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The preset logo shown next to the dataset in the DoiT console. Omit to keep the current logo; send an empty string to clear it.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LogoName1>))]
public sealed record LogoName1 : OpenStringEnum<LogoName1>
{
    private LogoName1(string value) : base(value)
    {
    }

    public static readonly LogoName1 Anthropic = new("anthropic");

    public static readonly LogoName1 Atlassian = new("atlassian");

    public static readonly LogoName1 Aws = new("aws");

    public static readonly LogoName1 Azure = new("azure");

    public static readonly LogoName1 Bifrost = new("bifrost");

    public static readonly LogoName1 Chatgpt = new("chatgpt");

    public static readonly LogoName1 Cloudflare = new("cloudflare");

    public static readonly LogoName1 Copilot = new("copilot");

    public static readonly LogoName1 Figma = new("figma");

    public static readonly LogoName1 Gcp = new("gcp");

    public static readonly LogoName1 Github = new("github");

    public static readonly LogoName1 Gitlab = new("gitlab");

    public static readonly LogoName1 Hotjar = new("hotjar");

    public static readonly LogoName1 Jira = new("jira");

    public static readonly LogoName1 Litellm = new("litellm");

    public static readonly LogoName1 Miro = new("miro");

    public static readonly LogoName1 Notion = new("notion");

    public static readonly LogoName1 Slack = new("slack");

    public static readonly LogoName1 Wordpress = new("wordpress");

    public TResult Match<TResult>(Func<TResult> onAnthropic,
        Func<TResult> onAtlassian,
        Func<TResult> onAws,
        Func<TResult> onAzure,
        Func<TResult> onBifrost,
        Func<TResult> onChatgpt,
        Func<TResult> onCloudflare,
        Func<TResult> onCopilot,
        Func<TResult> onFigma,
        Func<TResult> onGcp,
        Func<TResult> onGithub,
        Func<TResult> onGitlab,
        Func<TResult> onHotjar,
        Func<TResult> onJira,
        Func<TResult> onLitellm,
        Func<TResult> onMiro,
        Func<TResult> onNotion,
        Func<TResult> onSlack,
        Func<TResult> onWordpress,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Anthropic => onAnthropic(),
            _ when this == Atlassian => onAtlassian(),
            _ when this == Aws => onAws(),
            _ when this == Azure => onAzure(),
            _ when this == Bifrost => onBifrost(),
            _ when this == Chatgpt => onChatgpt(),
            _ when this == Cloudflare => onCloudflare(),
            _ when this == Copilot => onCopilot(),
            _ when this == Figma => onFigma(),
            _ when this == Gcp => onGcp(),
            _ when this == Github => onGithub(),
            _ when this == Gitlab => onGitlab(),
            _ when this == Hotjar => onHotjar(),
            _ when this == Jira => onJira(),
            _ when this == Litellm => onLitellm(),
            _ when this == Miro => onMiro(),
            _ when this == Notion => onNotion(),
            _ when this == Slack => onSlack(),
            _ when this == Wordpress => onWordpress(),
            _ => otherwise(Value)
        };

    public void Match(Action onAnthropic,
        Action onAtlassian,
        Action onAws,
        Action onAzure,
        Action onBifrost,
        Action onChatgpt,
        Action onCloudflare,
        Action onCopilot,
        Action onFigma,
        Action onGcp,
        Action onGithub,
        Action onGitlab,
        Action onHotjar,
        Action onJira,
        Action onLitellm,
        Action onMiro,
        Action onNotion,
        Action onSlack,
        Action onWordpress,
        Action<string> otherwise)
    {
        if (this == Anthropic) onAnthropic();
        else if (this == Atlassian) onAtlassian();
        else if (this == Aws) onAws();
        else if (this == Azure) onAzure();
        else if (this == Bifrost) onBifrost();
        else if (this == Chatgpt) onChatgpt();
        else if (this == Cloudflare) onCloudflare();
        else if (this == Copilot) onCopilot();
        else if (this == Figma) onFigma();
        else if (this == Gcp) onGcp();
        else if (this == Github) onGithub();
        else if (this == Gitlab) onGitlab();
        else if (this == Hotjar) onHotjar();
        else if (this == Jira) onJira();
        else if (this == Litellm) onLitellm();
        else if (this == Miro) onMiro();
        else if (this == Notion) onNotion();
        else if (this == Slack) onSlack();
        else if (this == Wordpress) onWordpress();
        else otherwise(Value);
    }
}
