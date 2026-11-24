using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Cloud provider or platform, using the Console's provider names.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ComposerProvider>))]
public sealed record ComposerProvider : OpenStringEnum<ComposerProvider>
{
    private ComposerProvider(string value) : base(value)
    {
    }

    public static readonly ComposerProvider Aws = new("aws");

    public static readonly ComposerProvider Azure = new("azure");

    public static readonly ComposerProvider AzureAd = new("azure_ad");

    public static readonly ComposerProvider Gcp = new("gcp");

    public static readonly ComposerProvider General = new("general");

    public static readonly ComposerProvider GoogleCloudSource = new("google_cloud_source");

    public static readonly ComposerProvider GoogleWorkspace = new("google_workspace");

    public static readonly ComposerProvider K8S = new("k8s");

    public static readonly ComposerProvider Oci = new("oci");

    public static readonly ComposerProvider Vmware = new("vmware");

    public TResult Match<TResult>(Func<TResult> onAws,
        Func<TResult> onAzure,
        Func<TResult> onAzureAd,
        Func<TResult> onGcp,
        Func<TResult> onGeneral,
        Func<TResult> onGoogleCloudSource,
        Func<TResult> onGoogleWorkspace,
        Func<TResult> onK8S,
        Func<TResult> onOci,
        Func<TResult> onVmware,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aws => onAws(),
            _ when this == Azure => onAzure(),
            _ when this == AzureAd => onAzureAd(),
            _ when this == Gcp => onGcp(),
            _ when this == General => onGeneral(),
            _ when this == GoogleCloudSource => onGoogleCloudSource(),
            _ when this == GoogleWorkspace => onGoogleWorkspace(),
            _ when this == K8S => onK8S(),
            _ when this == Oci => onOci(),
            _ when this == Vmware => onVmware(),
            _ => otherwise(Value)
        };

    public void Match(Action onAws,
        Action onAzure,
        Action onAzureAd,
        Action onGcp,
        Action onGeneral,
        Action onGoogleCloudSource,
        Action onGoogleWorkspace,
        Action onK8S,
        Action onOci,
        Action onVmware,
        Action<string> otherwise)
    {
        if (this == Aws) onAws();
        else if (this == Azure) onAzure();
        else if (this == AzureAd) onAzureAd();
        else if (this == Gcp) onGcp();
        else if (this == General) onGeneral();
        else if (this == GoogleCloudSource) onGoogleCloudSource();
        else if (this == GoogleWorkspace) onGoogleWorkspace();
        else if (this == K8S) onK8S();
        else if (this == Oci) onOci();
        else if (this == Vmware) onVmware();
        else otherwise(Value);
    }
}
